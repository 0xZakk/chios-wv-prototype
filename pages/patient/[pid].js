import { useRouter } from 'next/router'
import { Layout, LoadingContent, ErrorContent } from "components";
import { Tile, Button } from "carbon-components-react"
import useFetch from "react-fetch-hook";
import Add24 from "@carbon/icons-react/lib/add/24";

const PatientConsent = () => {
    const router = useRouter()
    const { pid } = router.query

    const { isLoading, data, error } = useFetch('https://70qqrslyec.execute-api.us-east-1.amazonaws.com/mock/consent/001')

    if (isLoading) {
        return <LoadingContent />
    }

    if (error) {
        return <ErrorContent message={error.message} />
    }

    console.log('data: ', data)

    return (
        <Layout>
            <Tile>
                <div className="bx--grid consent">

                    <div className="bx--row">
                        <div className="bx--col">
                            <h3>Consent Records</h3>
                        </div>
                    </div>

                    <div className="bx--row consent__content-row">
                        <div className="bx--col bx--col-sm-4 bx--col-md-8 bx--col-lg-16 bx--col-xlg-16 bx--col-max-16">
                            <span className="bx--label">Patient ID:</span>
                            <p className="bx--type-italic">{data.consent[0].patient.medicalRecordId}</p>
                        </div>
                    </div>

                    <div className="bx--row">
                        {data.consent.length > 0 ? (
                            data.consent.map(consent => {
                                let patientId = consent.patient.medicalRecordId
                                let statusObj = Object.entries(consent.consentDetails.date)[0]
                                const status = statusObj[0][0].toUpperCase() + statusObj[0].substring(1);
                                const date = new Date(statusObj[1]).toLocaleString().split(',')[0];

                                return (
                                    <div className="bx--col">
                                        <Tile>
                                            <div className="bx--grid">
                                                <div className="bx--row">
                                                    <div className="bx--col">
                                                        <span className="bx--label">Consent ID:</span>
                                                        <p>{patientId}</p>
                                                    </div>
                                                </div>

                                                <div className="bx--row">
                                                    <div className="bx--col">
                                                        <span className="bx--label">Status:</span>
                                                        <p>{status}</p>
                                                    </div>
                                                    <div className="bx--col">
                                                        <span className="bx--label">Date:</span>
                                                        <p>{date}</p>
                                                    </div>
                                                </div>

                                                <div className="bx--row">
                                                    <div className="bx--col" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                        <Button renderIcon={Add24} kind='ghost' size='small' onClick={() => router.push("/consent/validate/001")}>Details</Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </Tile>
                                    </div>

                                )
                            })
                        ) : (
                                <p>No consent records found.</p>
                            )}
                    </div>

                </div>
            </Tile>
        </Layout>
    )

}

export default PatientConsent