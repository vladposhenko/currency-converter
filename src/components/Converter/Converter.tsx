import React, {FC, useState} from 'react';
import CurrencySelect from "../CurrencySelect/CurrencySelect";
// @ts-ignore
import  {ValueType}  from "react-select";
import {Typography} from "@mui/material";
import './Converter.scss'

interface OptionType {
    label: string;
    value: string;
    rate:number
}

interface ConverterProps {
    options: OptionType[]
}

type isMult = false

const Converter: FC<ConverterProps> = ({options}) => {
    const [fromCurrency, setFromCurrency] = useState<OptionType>({
        value: 'Євро',
        label: 'Євро',
        rate:35.5611
    })
    const [toCurrency, setToCurrency] = useState<OptionType>({
        value: 'Долар США',
        label: 'Долар США',
        rate:36.5686
    })
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount , fromAmount
    if(amountInFromCurrency) {
        fromAmount = amount
        toAmount = (fromCurrency.rate / toCurrency.rate * amount).toFixed(3)
    }   else {
        toAmount = amount
        fromAmount = (toCurrency.rate / fromCurrency.rate * amount).toFixed(3)
    }
    const handleChangeFromCurrency = (selectedOption: ValueType<OptionType, isMult>) => {
        setFromCurrency(selectedOption)
    }
    const handleChangeToCurrency = (selectedOption: ValueType<OptionType, isMult>) => {
        setToCurrency(selectedOption)
    }

    function handleFromAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(+e.target.value)
        setAmountInFromCurrency(true)
    }
    function handleToAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(+e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <div className="wrapper  text-center p-16 mt-10" >
            <Typography variant="h4" >Конвертер валют</Typography>
            <div className="flex justify-between mt-20">
                    <CurrencySelect
                                    options={options}
                                    value={fromCurrency}
                                    onChangeCurrency={handleChangeFromCurrency}
                                    onChangeAmount={handleFromAmountChange}
                                    amount={fromAmount}
                                    />
                    <CurrencySelect options={options}
                                    value={toCurrency}
                                    onChangeCurrency={handleChangeToCurrency}
                                    onChangeAmount={handleToAmountChange}
                                    amount={toAmount}
                    />
            </div>
        </div>
    )
};

export default Converter;
