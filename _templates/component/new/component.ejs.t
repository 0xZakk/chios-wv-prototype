---
to: components/<%= name %>/<%= name %>.js
unless_exists: true
---
import React from "react"

function <%= name %> (props) {

  return (
    <div className="<%= h.changeCase.paramCase(name) %>"></div>
  )
}

export default <%= name %>
