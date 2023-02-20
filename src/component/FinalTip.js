import TipInput from './TipInput';
import TipList from './TipList';
import TipHeading from './TipHeading';
import TipCalculateBtn from './TipCalculateBtn';
import React, { useState } from 'react';

const FinalTip = () => {
    const [list, setList] = useState([]);

    const listDataHandler = (listData) => {
        setList(prev => [listData, ...prev])
    }
    return (
        <div className='final_div'>
            <TipHeading />
            <TipInput onGetData={listDataHandler} />
            <TipList items={list} />
            <TipCalculateBtn items={list} />
        </div>
    )
}
export default FinalTip;