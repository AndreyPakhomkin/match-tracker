import styled from "styled-components";

export const ErrorWrap = styled.div`
    background-color: rgb(11, 14, 18);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 16px;
    border-radius: 5px;
    margin-right: 10px;
`;

export const Icon = styled.img`
    height: 26px;
    padding: 10px;
`;

export const ErrorMessage = styled.div`
    font-weight: 500;
    font-size: 1.1rem;
`;

export const Btn = styled.div`
    width: 204px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: #EB0237;
    border-radius: 5px;

    :hover {
        cursor: pointer;
    }
`;

export const BtnText = styled.div`
    color: #FFF;
    font-weight: 600;
    font-size: 1.1rem;
`;