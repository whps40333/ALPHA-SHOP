import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Form from './Form'
import { InputBox } from './Input'

const APPELLATION = [
    { value: 'mr', intext: '先生' },
    { value: 'ms', intext: '女士' },
    { value: 'mx', intext: '不明' },
]

const CITY = [
    { value: null, intext: '請選擇縣市' },
    { value: 'KLU', intext: '基隆市' },
    { value: 'TPH', intext: '新北市' },
    { value: 'TPE', intext: '臺北市' },
    { value: 'TYC', intext: '桃園市' },
    { value: 'HSH', intext: '新竹縣' },
    { value: 'HSC', intext: '新竹市' },
    { value: 'MAC', intext: '苗栗市' },
    { value: 'MAL', intext: '苗栗縣' },
    { value: 'TXG', intext: '臺中市' },
    { value: 'CWH', intext: '彰化縣' },
    { value: 'CWS', intext: '彰化市' },
    { value: 'NTC', intext: '南投市' },
    { value: 'NTO', intext: '南投縣' },
    { value: 'YLH', intext: '雲林縣' },
    { value: 'CHY', intext: '嘉義縣' },
    { value: 'CYI', intext: '嘉義市' },
    { value: 'TNN', intext: '臺南市' },
    { value: 'KHH', intext: '高雄市' },
    { value: 'IUH', intext: '屏東縣' },
    { value: 'PTS', intext: '屏東市' },
    { value: 'ILN', intext: '宜蘭縣' },
    { value: 'ILC', intext: '宜蘭市' },
    { value: 'HWA', intext: '花蓮縣' },
    { value: 'HWC', intext: '花蓮市' },
    { value: 'TTC', intext: '臺東市' },
    { value: 'TTT', intext: '臺東縣' },
    { value: 'PEH', intext: '澎湖縣' },
    { value: 'KMN', intext: '金門縣' },
    { value: 'LNN', intext: '連江縣' },
]

export default function Address() {
    const [selectValue, setSelectValue] = useState({ appellation: '', city: '' })

    function apellationSelectedHandler(e) {
        setSelectValue({ ...selectValue, appellation: e.target.value })
    }

    function citySelectedHandler(e) {
        setSelectValue({ ...selectValue, city: e.target.value })
    }

    return (
        <Form type='address' title='寄送地址'>
            <div className='input__container'>
                <InputBox id='appellation' label='稱謂'>
                    <div className='select__container'>
                        <select
                            className='cursor-point'
                            value={selectValue.appellation}
                            onChange={apellationSelectedHandler}
                            required
                        >
                            {APPELLATION.map(data => (
                                <option key={uuidv4()} value={data.value}>
                                    {data.intext}
                                </option>
                            ))}
                        </select>
                    </div>
                </InputBox>
                <InputBox id='name' label='姓名'>
                    <input type='text' placeholder='請輸入姓名' />
                </InputBox>
            </div>

            <div className='input__container'>
                <InputBox id='phone' label='電話'>
                    <input type='tel' placeholder='請輸入行動電話' />
                </InputBox>
                <InputBox id='email' label='Email'>
                    <input type='email' placeholder='請輸入電子郵件' />
                </InputBox>
            </div>

            <div className='input__container'>
                <InputBox id='city' label='縣市'>
                    <div className='select__container'>
                        <select
                            className='cursor-point'
                            value={selectValue.city}
                            onChange={citySelectedHandler}
                            required
                        >
                            {CITY.map(data => (
                                <option key={uuidv4()} value={data.value}>
                                    {data.intext}
                                </option>
                            ))}
                        </select>
                    </div>
                </InputBox>
                <InputBox id='address' label='地址'>
                    <input type='text' placeholder='請輸入地址' />
                </InputBox>
            </div>
        </Form>
    )
}