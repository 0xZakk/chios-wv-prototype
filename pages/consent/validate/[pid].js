import { useRouter } from 'next/router'
import { Layout, LoadingContent, ErrorContent } from "components";
import { Tile } from "carbon-components-react"
import useFetch from "react-fetch-hook";

// https://70qqrslyec.execute-api.us-east-1.amazonaws.com/mock/consent/validate/001

const ValidateConsent = () => {
    const router = useRouter()
    const { pid } = router.query

    const { isLoading, error, data } = useFetch('https://70qqrslyec.execute-api.us-east-1.amazonaws.com/mock/consent/validate/001')

    if (isLoading) {
        return <LoadingContent />
    }

    if (error) {
        return <ErrorContent message={error.message} />
    }

    console.log("data: ", data)

    const { exists, consent } = data
    const patientId = consent.patient.medicalRecordId
    const status = consent.consentDetails.status[0].toUpperCase() + consent.consentDetails.status.substring(1)
    const label = consent.consentDetails.consentingMaterialLabel
    const signatoryDate = consent.signatory.date
    const consentVersion = consent.consentDetails.consentingMaterialVersion
    const consentRef = consent.consentDetails.consentingMaterialRef
    const institutionName = consent.local.localInstitution;
    const reviewBoard = consent.local.localIrb;
    const primaryInvestigator = consent.local.localPi;

    return (
        <Layout>
            <Tile>
                <div className="bx--grid consent">
                    <div className="bx--row">
                        <div className="bx--col">
                            <h3>Consent Validation</h3>
                        </div>
                    </div>

                    <div className="bx--row consent__title-row">
                        <div className="bx--col">
                            <h4>Details</h4>
                        </div>
                    </div>

                    <div className="bx--row consent__subtitle-row">
                        <div className="bx--col">
                            <h5>Consent</h5>
                        </div>
                    </div>

                    <div className="bx--row consent__content-row">
                        <div className="bx--col bx--col-sm-4 bx--col-md-12 bx--col-lg-12 bx--col-xlg-12 bx--col-max-12">
                            <span className="bx--label">Patient Id:</span>
                            <p className="bx--type-italic">{patientId}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
                            <span className="bx--label">Status:</span>
                            <p className="bx--type-italic">{status}</p>
                        </div>
                    </div>

                    <div className="bx--row">
                        <div className="bx--col consent__subtitle-row">
                            <h5>Consenting Material</h5>
                        </div>
                    </div>

                    <div className="bx--row consent__content-row">
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                            <span className="bx--label">Label:</span>
                            <p className="bx--type-italic">{label}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
                            <span className="bx--label">Date:</span>
                            <p className="bx--type-italic">{signatoryDate}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-4 bx--col-lg-4 bx--col-xlg-4 bx--col-max-4">
                            <div className="bx--label">Version:</div>
                            <p className="bx--type-italic">{consentVersion}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-16 bx--col-xlg-16 bx--col-max-16">
                            <span className="bx--label">Reference:</span>
                            <p className="bx--type-italic">{consentRef}</p>
                        </div>
                    </div>

                    <div className="bx--row consent__title-row">
                        <div className="bx--col">
                            <h4>Institutions</h4>
                        </div>
                    </div>

                    <div className="bx--row consent__subtitle-row">
                        <div className="bx--col">
                            <h5>Local Institution</h5>
                        </div>
                    </div>

                    <div className="bx--row consent__content-row">
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                            <span className="bx--label">Institution Name:</span>
                            <p className="bx--type-italic">{institutionName}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                            <span className="bx--label">Institution Review Board:</span>
                            <p className="bx--type-italic">{reviewBoard}</p>
                        </div>
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                            <span className="bx--label">Primary Investigator:</span>
                            <p className="bx--type-italic">{primaryInvestigator}</p>
                        </div>
                    </div>

                </div>
            </Tile>
        </Layout>
    )

}

export default ValidateConsent