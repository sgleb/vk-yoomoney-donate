import React, {Fragment, useState, useEffect} from 'react';
import {FormLayout, FormItem, Input, Button, Div, Textarea} from '@vkontakte/vkui';
import PropTypes from "prop-types";

const PaymentForm = ({id, wallet, label, hashParams}) => {
    const [sum, setSum] = useState(25);
    const [aucs, setAucs] = useState('');
    useEffect(() => {
        if (hashParams.sum) {
            setSum(hashParams.sum);
        }
        if (hashParams.aucs) {
            setAucs(hashParams.aucs.slice(0, 150));
        }
    }, []);

    return (
        <Fragment>
            <FormLayout onSubmit={(e) => {
            }} id={id} target="_blank" method="POST" action="https://yoomoney.ru/quickpay/confirm.xml">

                <FormItem top="Сумма">
                    <Input type="text" name="sum" pattern='[0-9]*' maxLength='5' value={sum} onInput={(e) => {
                        if (e.target.validity.valid) {
                            setSum(e.target.value)
                        }
                    }}/>
                </FormItem>

                <FormItem top="Лоты" bottom='до 150 знаков'>
                    <Textarea placeholder="Введите номера лотов через запятую" maxLength='150' name="targets"
                              value={aucs} onInput={(e) => {
                        if (e.target.validity.valid || e.target.value.length <= 0) {
                            setAucs(e.target.value)
                        }
                    }} required/>
                </FormItem>

                <FormItem>
                    <Div style={{display: "flex", justifyContent: "space-around"}}>
                        <Button type="submit" size="m">Оплатить</Button></Div>
                </FormItem>


                <input type="hidden" name="receiver" value={wallet}/>
                <input type="hidden" name="quickpay-form" value="donate"/>
                <input type="hidden" name="paymentType" value="AC"/>
                <input type="hidden" name="label" value={label}/>
                <input type="hidden" name="need-fio" value="false"/>
                <input type="hidden" name="need-email" value="false"/>
                <input type="hidden" name="need-phone" value="false"/>
                <input type="hidden" name="need-address" value="false"/>
            </FormLayout>
        </Fragment>
    )
};

PaymentForm.propTypes = {
    id: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hashParams: PropTypes.object.isRequired,
};

export default PaymentForm;
