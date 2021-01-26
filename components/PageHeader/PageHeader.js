import React from "react";
import Link from "next/link";

import { Header, HeaderName, SkipToContent } from "carbon-components-react";

function PageHeader(props) {
    return (
        <Header aria-label="Softhread Header">
            <SkipToContent></SkipToContent>
            <HeaderName href="/" prefix="" aria-label="Softhread Header">
                Softhread
            </HeaderName>
        </Header>
    );
}

export default PageHeader;
