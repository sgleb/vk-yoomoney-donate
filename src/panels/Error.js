import React from 'react';
import {Panel, PanelHeader, Text, Div, Title} from '@vkontakte/vkui';
import {ERRORS} from "../constants";

const Error = ({id, errCase}) => {
    let errorText;
    switch (errCase) {
        case ERRORS.NO_WALLET:
            errorText = 'Этой группе не назначен кошелек';
            break;
        case ERRORS.NO_GROUP:
            errorText = 'Откройте приложение из группы';
            break;
        default:
            errorText = '';
    }
    // console.log(errCase);
    return (
        <Panel id={id}>
            <PanelHeader><Title level='2'>Ошибка</Title></PanelHeader>
            <Div><Text weight='semibold'>{errorText}</Text></Div>
        </Panel>
    )
};
export default Error;
