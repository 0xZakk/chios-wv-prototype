import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout } from "components";
import { Tile, Button } from "carbon-components-react"
import Add24 from "@carbon/icons-react/lib/add/24";

export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <Tile>
        <div>
          <Head>
            <title>Softhread</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <div className="bx--grid consent">
              <div className="bx--row">
                <div className="bx--col">
                  <h2>Softhread Prototype</h2>
                </div>
              </div>

              <div className="bx--row">
                <div className="bx--col">
                  <p>There are two sample responses you can view within this prototype:</p>
                </div>
              </div>

              <div className="bx--row">
                <div className="bx--col">
                  <Button renderIcon={Add24} kind='ghost' size='small' onClick={() => router.push("/consent/validate/001")}>Sample Consent Validation</Button>
                </div>
              </div>

              <div className="bx--row">
                <div className="bx--col">
                  <Button renderIcon={Add24} kind='ghost' size='small' onClick={() => router.push("/patient/001")}>Sample Patient Consent</Button>
                </div>
              </div>

            </div>
          </main>
        </div>
      </Tile>
    </Layout>
  )
}
