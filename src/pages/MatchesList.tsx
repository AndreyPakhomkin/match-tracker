import { useEffect } from "react";
import MatchItem from "../components/MatchItem";
import { fetchMatches } from "../utils/api";
import { mapApiDataToMatch } from "../utils/mapping";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { putMatches } from "../store/reducers/matchesSlice";
import { setError } from "../store/reducers/errorSlice";
import { setLoading } from "../store/reducers/loadingSlice";

const MatchesList: React.FC = () => {
    const dispatch = useAppDispatch();
    const matches = useAppSelector(state => state.matches.matches) || [];
    const loading = useAppSelector(state => state.loading)

    useEffect(() => {
        fetchMatches()
            .then((data) => {
                const transformedData = data.map(mapApiDataToMatch);
                dispatch(putMatches(transformedData));
            })
            .catch(() => dispatch(setError({ errorStatus: true, errorMessage: '', errorType: 'fetchError' })))
            .finally(() => dispatch(setLoading(false)));
    }, []);

    let key = 0;

    if (!matches || matches.length === 0) {
        return null
    } else {
        return (
            <>
                {matches.map(match => {
                    key++
                    return (
                        <MatchItem match={match} key={'match ' + key} />
                    )
                })
                }
            </>
        )
    }
}

export default MatchesList