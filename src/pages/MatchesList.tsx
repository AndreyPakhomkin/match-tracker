import { useEffect, useState } from "react";
import MatchItem from "../components/MatchItem";
import { fetchMatches } from "../utils/api";
import { mapApiDataToMatch } from "../utils/mapping";
import { Match } from "../types/match";

const MatchesList: React.FC = () => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMatches()
            .then((data) => setMatches(data.map(mapApiDataToMatch)))
            .catch(() => setError("Ошибка загрузки данных"))
            .finally(() => setLoading(false));
    }, []);

    let key = 0;
    return (
        <>
            {matches.map(match => {
                key++
                return (
                    <MatchItem match={match} key={'match' + key} />
                )
            })
            }
        </>
    )
}

export default MatchesList