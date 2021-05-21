import { useEffect, useState } from 'react'

import CoinLayer from '../api/CoinLayer';
import API_KEY from '../key';

const LiveDataLoader = () => {
    const [data,setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const x = await CoinLayer.get('/live',{
                params:{
                    access_key: API_KEY,
                    target:'INR'
                }
            })

            const y = await CoinLayer.get('/live',{
                params:{
                    access_key: API_KEY,
                    target:'USD'
                }
            })
            console.log({inr:x.data.rates,usd:y.data.rates});
            setData({inr:x.data.rates,usd:y.data.rates})
        }

        fetchData()
    },[])

    if(data !== null)
    return data
}

export default LiveDataLoader