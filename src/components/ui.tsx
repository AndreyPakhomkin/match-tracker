import React from "react";
import { ErrorWrap, Icon, ErrorMessage, Btn, BtnText } from "../styled/UtilsStyled";

import errorIcon from '../icons/error-icon.png'
import refreshIcon from '../icons/refresh-icon.png'


export const Error: React.FC = () => {
    return (
        <ErrorWrap>
            <Icon as="img" src={errorIcon} alt="Error icon" />
            <ErrorMessage>Ошибка: не удалось загрузить информацию</ErrorMessage>
        </ErrorWrap>
    )
}

export const Button: React.FC = () => {
    return (
        <Btn>
            <BtnText>Обновить</BtnText>
            <Icon as="img" src={refreshIcon} alt="Refresh icon" />
        </Btn>
    )
}