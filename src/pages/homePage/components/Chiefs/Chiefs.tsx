import React, { FC } from 'react'
import Image from "../../../../components/Image/Image"
import { useTranslation } from 'react-i18next';

const Chiefs :FC=():JSX.Element=>{
    const {t}=useTranslation()
    return <div className='chiefs'>
        <section>
            <h1 className='title'>Our Top Chiefs</h1>
            <div className='top-chiefs-cards'></div>
        </section>
    </div>
}
export default Chiefs