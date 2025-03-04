import React from "react";
import { ErrorWrap, Icon, ErrorMessage, Btn, BtnText } from "../styled/uiStyled";
import { useAppSelector } from "../store/hooks";

import errorIcon from '../icons/error-icon.png';
import refreshIcon from '../icons/refresh-icon.png';

export const Error: React.FC = () => {
    const error = useAppSelector(state => state.error);
    if (!error.errorStatus) {
        return null
    } else {
        return (
            <ErrorWrap>
                <Icon src={errorIcon} alt="Error icon" />
                <ErrorMessage>Ошибка: не удалось загрузить информацию</ErrorMessage>
            </ErrorWrap>
        )
    }
}

export const Button: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const loading = useAppSelector(state => state.loading.loading);
    return (
        <Btn $loading={loading} onClick={onClick} disabled={loading}>
            <BtnText>Обновить</BtnText>
            <Icon src={refreshIcon} alt="Refresh icon" $loading={loading} />
        </Btn>
    );
};