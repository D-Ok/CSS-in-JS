import React from "react";
import {AvatarStyles, Image, Link, Text} from "./style";
import GLOBAL_CONSTANTS from "../../assets/constants";

const {AVATAR_IMG, AVATAR_URL} = GLOBAL_CONSTANTS;


const Avatar = () => {

    return(
        <AvatarStyles>
            <Image src={AVATAR_IMG} alt="Dan Abramov" />
            <Text>
                Personal blog by <Link href={AVATAR_URL}>Dan Abramov</Link>. <br/>
                I&nbsp;explain with words and code.
            </Text>
        </AvatarStyles>
    )
}

export default Avatar