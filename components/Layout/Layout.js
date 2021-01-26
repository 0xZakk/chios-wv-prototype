import React from "react";
import { PageHeader, PageFooter } from "components";

function Layout(props) {
    return (
        <div className="page-layout">
            <PageHeader />
            <div className="page-layout__content">
                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 bx--offset-lg-2 bx--col-xlg-12 bx--offset-xlg-2 bx--col-max-12 bx--offset-max-2">
                            {props.children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Layout;
