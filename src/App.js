import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, Root} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import qs from 'querystring';
import {wallets, ERRORS} from './constants';


import Payment from './panels/Payment';
import Error from "./panels/Error";
import Blank from './panels/Blank';

const App = () => {
    const [activePanel, setActivePanel] = useState('blank');
    const [activeView, setActiveView] = useState('view1');
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [errCase, setErrCase] = useState('');
    const [wallet, setWallet] = useState('');
    const [label, setLabel] = useState('');
    const [hashParams, setHashParams] = useState({});

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            const params = qs.parse(window.location.search.slice(1));
            if (params.vk_group_id) {

                if (wallets[params.vk_group_id]?.wallet) {
                    setWallet(wallets[params.vk_group_id]?.wallet);
                    setLabel(params.vk_user_id);
                    const parsedHashParams = qs.parse(window.location.hash.slice(1));
                    setHashParams(parsedHashParams);
                    setActivePanel('payment');
                }
                else {
                    setErrCase(ERRORS.NO_WALLET);
                    setActivePanel('error');
                }
            } else {
                setErrCase(ERRORS.NO_GROUP);
                setActivePanel('error');
            }
            setActiveView('view2');
            setPopout(null);
        }

        fetchData();
    }, []);

    return (
        <AdaptivityProvider>
            <AppRoot>
                <Root activeView={activeView}>
                    <View id="view1">
                        <Blank id='blank'/>
                    </View>
                    <View activePanel={activePanel} id="view2" popout={popout}>
                        <Error id='error' errCase={errCase}/>
                        <Payment id='payment' wallet={wallet} label={label} hashParams={hashParams}/>
                    </View>
                </Root>
            </AppRoot>
        </AdaptivityProvider>
    );
};

export default App;
