import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Title, PanelHeader, Div} from '@vkontakte/vkui';

import PaymentForm from '../components/PaymentForm'

const Payment = ({id,wallet}) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                <Title level="1">Оплата комиссии за лот</Title>
            </PanelHeader>
            <Div><PaymentForm id='paymentForm' wallet={wallet}/></Div>
        </Panel>
    );
};


Payment.propTypes = {
    id: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
};

export default Payment;
