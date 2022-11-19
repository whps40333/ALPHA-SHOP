import React from 'react';
import Form from './Form';
import { InputBox } from './Input';
import {
    useSheet,
    useSheetDispatch,
} from '../../../../context/ShoppingSheetContext'


export default function CreditCard() {

    const sheet = useSheet()
    const sheetDispatch = useSheetDispatch()


    return (
        <Form type='address' title='寄送地址'>
            <div className='input__container'>
                <InputBox id='card__name' label='持卡人姓名'>
                    <input
                        type='text'
                        placeholder='John Doe'
                        value={sheet.cardName}
                        onChange={e =>
                            sheetDispatch({ type: 'editCardName', value: e.target.value })
                        }
                    />
                </InputBox>
            </div>
            <div className='input__container'>
                <InputBox id='card__number' label='卡號'>
                    <input
                        type='text'
                        placeholder='1111 2222 3333 4444'
                        value={sheet.cardNumber}
                        onChange={e =>
                            sheetDispatch({ type: 'editCardNumber', value: e.target.value })
                        }
                    />
                </InputBox>
            </div>
            <div className='input__container'>
                <InputBox id='card__date' label='有效期限'>
                    <input
                        type='text'
                        placeholder='MM/YY'
                        value={sheet.cardDate}
                        onChange={e =>
                            sheetDispatch({ type: 'editCardDate', value: e.target.value })
                        }
                    />
                </InputBox>
                <InputBox id='card__code' label='CVC / CCV'>
                    <input
                        type='text'
                        placeholder='123'
                        value={sheet.cardCode}
                        onChange={e =>
                            sheetDispatch({ type: 'editCardCode', value: e.target.value })
                        }
                    />
                </InputBox>
            </div>
        </Form>
    )
}