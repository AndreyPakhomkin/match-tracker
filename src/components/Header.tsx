import React from "react";
import { Wrap, Title, UpdateGroup } from "../styled/HeaderStyled";
import { Error, Button } from "./ui";
import { fetchMatches } from "../utils/api";
import { mapApiDataToMatch } from "../utils/mapping";
import { useAppDispatch } from "../store/hooks";
import { putMatches } from "../store/reducers/matchesSlice";
import { setError } from "../store/reducers/errorSlice";
import { setLoading } from "../store/reducers/loadingSlice";

const Header: React.FC = () => {
    const dispatch = useAppDispatch()

    const updateMatches = () => {
        dispatch(setLoading(true));
        fetchMatches()
            .then((data) => {
                const transformedData = data.map(mapApiDataToMatch);
                dispatch(putMatches(transformedData));
            })
            .catch(() => dispatch(setError({ errorStatus: true, errorMessage: '', errorType: 'fetchError' })))
            .finally(() => dispatch(setLoading(false)));
    }

    return (
        <Wrap>
            <Title>Match Tracker</Title>
            <UpdateGroup>
                <Error />
                <Button onClick={updateMatches} />
            </UpdateGroup>
        </Wrap>
    )
}

export default Header