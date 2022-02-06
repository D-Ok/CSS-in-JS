import React from "react";
import {HeaderStyles} from "./style";
import HeaderLink from "../HeaderLink";
import Toggle from "../Toggle";

const Header = ({onToggleTheme}) => {

    return(
        <HeaderStyles>
            <HeaderLink text={'Overreacted'} isHeader={true}/>
            <Toggle onClick={onToggleTheme}/>
        </HeaderStyles>
    )
}

export default Header