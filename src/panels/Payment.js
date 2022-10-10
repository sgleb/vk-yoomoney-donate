import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Title, PanelHeader, Div} from '@vkontakte/vkui';

import PaymentForm from '../components/PaymentForm'

const Payment = ({id, group, hashParams}) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                <Title level="1">Оплата комиссии за лот</Title>
            </PanelHeader>
            <Div><PaymentForm id='paymentForm' group={group} hashParams={hashParams}/></Div>
        </Panel>
    );
};


Payment.propTypes = {
    id: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    hashParams: PropTypes.object.isRequired,

};

export default Payment;
