import React, { useState } from 'react'
import Register from './register/Register'
import Cart from './cart/Cart'

import style from './Main.module.scss'

const SHIPPINGDATA = [
    {
        id: 1,
        name: '標準運送',
        price: 0,
        period: '約 3~7 個工作天',
    },
    {
        id: 2,
        name: 'DHL 貨運',
        price: 500,
        period: '48 小時內送達',
    },
]

export default function Main() {
    const [currentChecked, setCurrentChecked] = useState(1)

    function handlecurrentChecked(id) {
        if (id === '2') {
            setCurrentChecked(2)
        } else {
            setCurrentChecked(1)
        }
    }

    let checkedShipping = SHIPPINGDATA.filter(data => {
        return data.id === Number(currentChecked)
    })

    return (
        <main className={style.site__main}>
            <div className={`${style.main__container} container`}>
                <Register
                    handleRadioChecked={handlecurrentChecked}
                    currentChecked={currentChecked}
                />
                <Cart checkedData={checkedShipping[0].price} />
            </div>
        </main>
    )
}