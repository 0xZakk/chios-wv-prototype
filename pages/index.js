import Head from 'next/head'
import { Layout } from "components";


export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>test</h1>
        </main>
      </div>
    </Layout>
  )
}
