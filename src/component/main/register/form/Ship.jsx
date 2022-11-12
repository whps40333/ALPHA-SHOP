import React from 'react';
import Form from './Form';
import { InputRadio } from './Input';


export default function Ship({ currentChecked, handleRadioChecked }) {
    return (
        <Form type='shipping' title='運送方式'>
            <div className='input__container'>
                <InputRadio
                    radioId='1'
                    price='0'
                    name='標準運送'
                    priceIntext='免費'
                    period='約 3~7 個工作天'
                    checked={currentChecked === 1 && true}
                    handleOnChange={handleRadioChecked}
                />
            </div>
            <div className='input__container'>
                <InputRadio
                    radioId='2'
                    price='500'
                    name='DHL 貨運'
                    priceIntext='$500'
                    period='48 小時內送達'
                    checked={currentChecked === 2 && true}
                    handleOnChange={handleRadioChecked}
                />
            </div>
        </Form>
    )
}