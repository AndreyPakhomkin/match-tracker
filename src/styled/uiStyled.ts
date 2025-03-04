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

export const Icon = styled.img<{ $loading?: boolean }>`
    height: 26px;
    padding: 10px;
    animation: ${({ $loading }) => ($loading ? 'spin 1s linear infinite' : 'none')};

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
    }
`as React.FC<React.ImgHTMLAttributes<HTMLImageElement> & { $loading?: boolean }>;

export const ErrorMessage = styled.div`
    font-weight: 500;
    font-size: 1.1rem;
`;

export const Btn = styled.button<{ $loading: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>>`
    width: 204px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $loading }) => ($loading ? '#A01131' : '#EB0237')};
    border: none;
    border-radius: 5px;
    cursor: ${({ $loading }) => ($loading ? 'default' : 'pointer')};

    :hover {
        background-color: ${({ $loading }) => !$loading && '#D7013A'};
    }
`;

export const BtnText = styled.div`
    color: #FFF;
    font-weight: 600;
    font-size: 1.1rem;
`;