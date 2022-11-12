import React from 'react';
import Form from './Form';
import { InputBox } from './Input';


export default function CreditCard() {
    return (
        <Form type='address' title='寄送地址'>
            <div className='input__container'>
                <InputBox id='card__name' label='持卡人姓名'>
                    <input type='text' placeholder='John Doe' />
                </InputBox>
            </div>
            <div className='input__container'>
                <InputBox id='card__number' label='卡號'>
                    <input type='text' placeholder='1111 2222 3333 4444' />
                </InputBox>
            </div>
            <div className='input__container'>
                <InputBox id='card__date' label='有效期限'>
                    <input type='text' placeholder='MM/YY' />
                </InputBox>
                <InputBox id='card__code' label='CVC / CCV'>
                    <input type='text' placeholder='123' />
                </InputBox>
            </div>
        </Form>
    )
}