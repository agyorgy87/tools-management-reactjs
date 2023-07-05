import React, {useState} from 'react';
import '../css/MainTitle.css';

export default function MainTitle(props) {

    let tools = props.data;
    const[allData, setAllData] = useState(tools);

    const backToMain = (props) => {
        const backToAllData = allData
        props.setData(backToAllData);
    }
 
    return (
        <div>
            <button onClick={() => backToMain(props)}  className="main-title">Tool Shop</button>
        </div>
    )
}