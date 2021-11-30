import {fetchData} from '../../api';
import React, {useState, useEffect} from 'react';
//import styles from './api1.module.css';

const Data = ({handleFetch}) =>{
    const[setRec, fetchRec] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            fetchRec(await fetchData());
        }
        fetchAPI();
    },[]);

    <div> 
        <h1 className="font-semibold">${setRec}</h1>
    </div>
}

export default Data;