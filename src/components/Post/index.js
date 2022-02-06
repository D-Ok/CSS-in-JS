import React from "react";
import {Header, Link, Paragraph, PostContainer, Small} from "./style";
import {coffeeStr} from "./utils";
import HeaderLink from "../HeaderLink";

const Post = ({header, shortDescription, description}) => {

    const {date, min} = shortDescription
    const coffeeNumber = Math.round(min / 5);
    const coffee = coffeeStr(coffeeNumber)

    return (
        <PostContainer>
            <Header>
                <Link href="/">{header}</Link>
            </Header>
            <Small>{date} • {coffee} {min} min read</Small>
            <Paragraph>{description}</Paragraph>
        </PostContainer>
    )
}

export default Post