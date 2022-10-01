import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import axios from "axios";
import {ALL_CURRENCY} from "./api/api";
import {IBank} from "./models/data-type";
import Converter from "./components/Converter/Converter";

interface OptionType {
    label: string;
    value: string;
    rate:number
}

function App() {
    const [currency, setCurrency] = useState<IBank[]>([])
    const [headerCurrency, setHeaderCurrency] = useState<IBank[]>([])
    const [options, setOptions] = useState<OptionType[]>([])
    useEffect(() => {
        fetchCurrency()
    }, [])
    async function fetchCurrency() {
        try {
            const response = await axios.get<IBank[]>(ALL_CURRENCY)
            setCurrency(response.data)
            setHeaderCurrency(
                response.data.filter((c) => {
                    if(c.r030 === 840 || c.r030 === 978){
                        return c
                    }
                })
            )
            getOptions(response.data)
        } catch (e) {

        }
    }

    const getOptions = (data:IBank[]) => {
        let arr: OptionType[] = []
        data.map((c) => {
            return arr.push({ value: c.txt, label: c.txt, rate:c.rate })
        })
        setOptions(arr)
    }

  return (
    <div className="App">
            <Header currencies={headerCurrency} />
            <Converter options={options} />
    </div>
  );
}

export default App;
