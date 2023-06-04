import React, {Fragment, useState, useEffect} from 'react';
import {FormLayout, FormItem, Input, Button, Div, Textarea} from '@vkontakte/vkui';
import PropTypes from "prop-types";
import qs from 'querystring';

const constants = {
    PAY: 'PAY',
    LINK: 'LINK'
}
const PaymentForm = ({id, wallet, hashParams}) => {
    const [sum, setSum] = useState(25);
    const [aucs, setAucs] = useState('');
    const [showLink, setShowLink] = useState(false);
    useEffect(() => {
        if (hashParams.sum) {
            setSum(hashParams.sum);
        }
        if (hashParams.aucs) {
            setAucs(hashParams.aucs.slice(0, 64));
        }
    }, []);

    const getLink = () => {
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
        return `https://yoomoney.ru/quickpay/confirm.xml?${stringified}`;
    }

    return (
        <Fragment>
            <FormLayout id={id} onSubmit={(e) => {
                const submitter = e.nativeEvent.submitter.id
                e.preventDefault();

                switch (submitter) {
                    case constants.PAY: {
                        const link = document.createElement('a');
                        link.setAttribute('target', 'about:blank');
                        link.href = getLink();
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        break;
                    }
                    case constants.LINK: {
                        setShowLink(!showLink);
                        break;
                    }
                }

            }}>
                <FormItem top="Сумма">
                    <Input type="text" name="sum" pattern='[0-9]*' maxLength='5' value={sum} onInput={(e) => {
                        if (e.target.validity.valid || e.target.value.length <= 0) {
                            setSum(e.target.value)
                        }
                        if (e.target.value.length <= 0) {
                            setShowLink(false);
                        }
                    }} required/>
                </FormItem>
                <FormItem top="Лоты" bottom='до 64 знаков'>
                    <Textarea placeholder="Введите номера лотов через запятую" maxLength='64' value={aucs}
                              onInput={(e) => {
                                  if (e.target.validity.valid || e.target.value.length <= 0) {
                                      setAucs(e.target.value)
                                  }
                                  if (e.target.value.length <= 0) {
                                      setShowLink(false);
                                  }
                              }} required/>
                </FormItem>
                <FormItem>
                    <Div style={{display: "flex", justifyContent: "space-around"}}>
                        <Button id={constants.PAY} type="submit" size="m">Оплатить</Button></Div>
                    <Div style={{display: "flex", justifyContent: "space-around"}}>
                        <Button id={constants.LINK} type="submit"
                                size="m">{showLink ? 'Скрыть' : 'Показать'} ссылку</Button></Div>
                </FormItem>
            </FormLayout>
            {showLink ? <Textarea value={getLink()} onFocus={(e) => e.target.select()}/> : null}
        </Fragment>
    )
};

PaymentForm.propTypes = {
    id: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
    hashParams: PropTypes.object.isRequired,
};

export default PaymentForm;
