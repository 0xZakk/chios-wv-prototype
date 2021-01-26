import React from "react"

import { Layout } from "components"
import { Loading } from "carbon-components-react"

function LoadingContent(props) {

  return (
    <Layout>
      <div className="loading-content">
        <Loading withOverlay={false} />
      </div>
    </Layout>
  )
}

export default LoadingContent
