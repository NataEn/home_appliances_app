import React, { FC } from 'react'
import { resources } from "../../../internalization/index"
import { useTranslation, Trans } from 'react-i18next';

const Lang :FC=()=>{
    const languages=Object.keys(resources)

const {i18n} = useTranslation()
    return <div className='lng'> 
    {languages.map(lng=><button type="submit" key={lng} onClick={()=>{i18n.changeLanguage(lng)}} disabled={i18n.resolvedLanguage===lng}>{lng}</button>)
    }
    </div>
}

export default Lang;