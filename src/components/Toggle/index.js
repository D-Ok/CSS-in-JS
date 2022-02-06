import React from "react";

import {Input, Label, Span} from "./style";
import {useTheme} from "styled-components";
import DarkTheme from "../../assets/darkTheme";

const Toggle = ({onClick}) => {
    const theme = useTheme();
    const checked = theme.bg === DarkTheme.bg;

    return (
        <Label >
            <Input type="checkbox" checked = {checked} onChange = {onClick}/>
            <Span/>
        </Label>
    )
}

export default Toggle