---
to: screens/<%= name %>/<%= name %>.js
unless_exists: true
---
import React from "react"
import { Button } from "carbon-components-react";

function <%= name %> (props) {
  const { dispatch } = props

  return (
    <div className="screen <%= h.changeCase.paramCase(name) %>">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col">
            <Button onClick={(e) => dispatch({ type: "next_step" })}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default <%= name %>
