import { Match } from "../types/match";

export const mapApiDataToMatch = (apiMatch: any): Match => ({
    commands: [
        {
            commandName: apiMatch.awayTeam.name,
            commandScore: apiMatch.awayScore,
        },
        {
            commandName: apiMatch.homeTeam.name,
            commandScore: apiMatch.homeScore,
        }
    ],
    matchStatus: mapStatus(apiMatch.status)
});

const mapStatus = (apiStatus: string): string => {
    switch (apiStatus) {
        case "Ongoing":
            return "Live";
        case "Finished":
            return "Finished";
        case "Scheduled":
        default:
            return "Match preparing";
    }
};