import React from "react";
import {HeaderLinkStyles, Link} from "./style";

const HeaderLink = ({text, isHeader}) => {

    return(
        <HeaderLinkStyles isHeader={isHeader}>
            <Link href="/" isHeader={isHeader}>{text}</Link>
        </HeaderLinkStyles>
    )
}

export default HeaderLink