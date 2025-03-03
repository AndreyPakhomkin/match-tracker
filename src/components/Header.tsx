import React from "react";
import { Wrap, Title, UpdateGroup } from "./styled/HeaderStyled";
import { Error, Button } from "./Utils";

const Header: React.FC = () => {
    return (
        <Wrap>
            <Title>Match Tracker</Title>
            <UpdateGroup>
                <Error></Error>
                <Button></Button>
            </UpdateGroup>
        </Wrap>
    )
}

export default Header