import { useEffect, useState } from 'react';

import CoinLayer from '../api/CoinLayer';
import API_KEY from '../key';


const AllCoinsData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const x = await CoinLayer.get('/list', {
                params: {
                    access_key: API_KEY,
                    target: 'INR',
                },
            });
            const coinDataArr = [],
                coinListArr = [],
                keys = Object.keys(x.data.crypto);
            for (let i = 0; i < keys.length; i++) {
                const { icon_url, name, symbol } = x.data.crypto[keys[i]];
                const obj = {};
                obj[name] = { icon_url, name, symbol };
                coinDataArr.push(obj);
                coinListArr.push(name);
            }
            console.log({ CoinData: coinDataArr, CoinList: coinListArr });
            setData({ CoinData: coinDataArr, CoinList: coinListArr });
        };
        fetchData();
    }, []);

    if (data !== null) return data;
};

export default AllCoinsData;
