import React, {Fragment, useState, useEffect} from 'react';
import {FormLayout, FormItem, Input, Button, Div, Textarea} from '@vkontakte/vkui';
import PropTypes from "prop-types";
import qs from 'querystring';

const PaymentForm = ({id, wallet, hashParams}) => {
    const [sum, setSum] = useState(25);
    const [aucs, setAucs] = useState('');
    useEffect(() => {
        if (hashParams.sum) {
            setSum(hashParams.sum);
        }
        if (hashParams.aucs) {
            setAucs(hashParams.aucs.slice(0, 64));
        }
    }, []);

    return (
        <Fragment>
            <FormLayout id={id} onSubmit={(e) => {
                e.preventDefault();

                const params = {
                    targets: 'Оплата комиссии',
                    sum: sum,
                    receiver: wallet,
                    'quickpay-form': 'donate',
                    paymentType: 'AC',
                    label: aucs,
                    'need-fio': false,
                    'need-email': false,
                    'need-phone': false,
                    'need-address': false,
                };

                const stringified = qs.stringify(params);
                const link = document.createElement('a');
                link.setAttribute('target', 'about:blank');
                link.href = `https://yoomoney.ru/quickpay/confirm.xml?${stringified}`;
                document.body.appendChild(link);
                link.click();
                link.remove();
            }}>
                <FormItem top="Сумма">
                    <Input type="text" name="sum" pattern='[0-9]*' maxLength='5' value={sum} onInput={(e) => {
                        if (e.target.validity.valid) {
                            setSum(e.target.value)
                        }
                    }}/>
                </FormItem>
                <FormItem top="Лоты" bottom='до 64 знаков'>
                    <Textarea placeholder="Введите номера лотов через запятую" maxLength='64' value={aucs}
                              onInput={(e) => {
                                  if (e.target.validity.valid || e.target.value.length <= 0) {
                                      setAucs(e.target.value)
                                  }
                              }} required/>
                </FormItem>
                <FormItem>
                    <Div style={{display: "flex", justifyContent: "space-around"}}>
                        <Button type="submit" size="m">Оплатить</Button></Div>
                </FormItem>
            </FormLayout>
        </Fragment>
    )
};

PaymentForm.propTypes = {
    id: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
    hashParams: PropTypes.object.isRequired,
};

export default PaymentForm;
