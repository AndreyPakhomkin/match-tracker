export interface Command {
    commandName: string;
    commandScore: number;
}

export interface Match {
    commands: Command[];
    matchStatus: string;
}

export interface MatchItemProps {
    match: Match;
}

export interface commandProps {
    commandName: string;
    side: "left" | "right";
}

export interface ScoreStatusProps {
    commandScore1: number;
    commandScore2: number;
    matchStatus: string;
}