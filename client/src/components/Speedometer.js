import axios from 'axios';
import React, {useState, useEffect} from "react";
import ReactSpeedometer, {Transition} from "react-d3-speedometer";

const Speedometer = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/price-change')
            .then((res) => {
                // console.log(res.data.change)
                setValue(res.data.change);
            })
    })

    return <>
    <h3><strong>Predicted price change</strong></h3>
    <ReactSpeedometer 
        minValue={-50} 
        maxValue={50} 
        segments={10} 
        value={value}
        width={500}
        needleTransition={Transition.easeElasticOut}
        needleTransitionDuration={1000}
    />
    </>
}

export default Speedometer;