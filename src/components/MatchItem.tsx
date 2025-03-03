import React from "react";
import { NameContainer, CommandLogo, CommandName, ScoreContainer, Score, Status, MatchContainer } from "../styled/MatchItemStyled";
import { Match } from "../types/match";

import commandLogo from '../icons/command-icon.png'

interface commandProps {
    commandName: string;
    side: 'left' | 'right';
}

interface ScoreStatusProps {
    commandScore1: number;
    commandScore2: number;
    matchStatus: string;
}

interface MatchItemProps {
    match: Match;
}

const Command: React.FC<commandProps> = ({ commandName, side }) => {
    return (
        <NameContainer>
            {side === 'left' &&
                <CommandLogo as={'img'} src={commandLogo} alt={'command logo'} />
            }
            <CommandName>{commandName}</CommandName>
            {side === 'right' &&
                <CommandLogo as={'img'} src={commandLogo} alt={'command logo'} />
            }
        </NameContainer>
    )
}

const ScoreStatus: React.FC<ScoreStatusProps> = ({ commandScore1, commandScore2, matchStatus }) => {
    let matchScore = commandScore1 + ' : ' + commandScore2;
    return (
        <ScoreContainer>
            <Score>{matchScore}</Score>
            <Status $status={matchStatus as "Live" | "Finished" | "Match preparing"}>{matchStatus}</Status>
        </ScoreContainer>
    )
}

const MatchItem: React.FC<MatchItemProps> = ({ match }) => {
    return (
        <MatchContainer>
            <Command commandName={match.commands[0].commandName} side={'left'} />
            <ScoreStatus
                commandScore1={match.commands[0].commandScore}
                commandScore2={match.commands[1].commandScore}
                matchStatus={match.matchStatus} />
            <Command commandName={match.commands[1].commandName} side={'right'} />
        </MatchContainer>
    )
}

export default MatchItem