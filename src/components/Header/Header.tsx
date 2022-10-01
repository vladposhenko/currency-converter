import React, {FC, useState} from 'react';
import {IBank} from "../../models/data-type";
import {Typography} from "@mui/material";
import './Header.scss'

interface HeaderProps {
    currencies: IBank[]
}

const Header: FC<HeaderProps> = ({currencies}) => {
    return (
    <div className="header  p-5 flex justify-between">
        <Typography variant="h4">Converter</Typography>
        <div className="p-2">
            { currencies.map((c) => <p key={c.r030} >1 {c.cc} = {c.rate.toFixed(3)} UAH</p> ) }
        </div>
    </div>
    )
};

export default Header;
