import React from "react"
import { Layout } from "components"
import { InlineNotification } from "carbon-components-react"

function ErrorContent(props) {
  console.log(props.message);

  return (
    <Layout>
      <div className="error-content">
        <InlineNotification
          hideCloseButton
          lowContrast
          kind="error"
          subtitle={<span>{props.message}</span>}
          title="Error:"
        />
      </div>
    </Layout>
  )
}

export default ErrorContent
