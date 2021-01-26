import React from "react"
import Link from "next/link"

function PageFooter(props) {

  return (
    <div className="page-footer">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <h4>Softhread</h4>
          </div>
          <div className="bx--col">
            <ul>
              <li>
                <Link href="#">Terms of use</Link>
              </li>
              <li>
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFooter
