import React, {FC, useState} from 'react';
import Select from "react-select";
import {Input, TextField} from "@mui/material";
// @ts-ignore
import  {ValueType}  from "react-select";

interface OptionType {
    label: string;
    value: string;
    rate:number;
}

interface CurrencySelect {
    options: OptionType[]
    value:OptionType,
    onChangeCurrency?: (selectedOption: ValueType<OptionType, false>) => void,
    amount: number | string
    onChangeAmount:(e: React.ChangeEvent<HTMLInputElement>) => void
}

const CurrencySelect: FC<CurrencySelect> = ({
                                                options ,
                                                value,
                                                onChangeCurrency,
                                                onChangeAmount,
                                                amount}) => {
    return (
        <div className="w-1/3 flex flex-col">
            <TextField  variant="filled" value={amount} onChange={onChangeAmount} type="number"/>
            <Select className="mt-5" value={value} options={options} onChange={onChangeCurrency} />
        </div>
    );
};

export default CurrencySelect;