import styled from "styled-components";

interface StatusProps {
    $status?: 'Live' | 'Finished' | 'Match preparing';
    children: React.ReactNode;
}

export const MatchContainer = styled.div`
    font-family: 'Inter';
    font-weight: 500;
    height: 5.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(11, 14, 18);
    padding: 0 1.5rem;
    margin-bottom: 0.6rem;
    color: #FFF;
`;

export const ScoreContainer = styled.div`
    height: 70%;
    width: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Score = styled.div`
    font-size: 20px;
`;

export const Status = styled.div<StatusProps>`
    min-width: 100%;
    width: fit-content;
    padding: 0 4px;
    height: 1.6rem;
    display: flex;
    font-size: 12px;
    font-weight: 500;
    color: #FFF;
    background-color: ${(props) => {
        switch (props.$status) {
            case 'Live': return "#43AD28";
            case 'Finished': return "#EB0237";
            case 'Match preparing': return "#EB6402";
            default: return 'black';
        }
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CommandLogo = styled.img`
    height: 48px;
    margin: 1rem;
`;

export const CommandName = styled.div`
    display: flex;
    justify-content: space-between;
`;