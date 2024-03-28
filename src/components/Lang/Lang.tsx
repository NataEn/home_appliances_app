import React, { FC } from 'react'
import { resources } from "../../internalization/index"
import { useTranslation, Trans } from 'react-i18next';
import { faGlobe, faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Lang: FC = () => {
    const languages = Object.keys(resources)

    const { i18n } = useTranslation()
    return <div className='lang'>
        <div className='dropdown'>
        <FontAwesomeIcon icon={faGlobe} className='lang-dropdown-btn' />
        <div className='dropdown-content'>    
            {languages.map(lng => <button type="submit" key={lng}
            onClick={() => { i18n.changeLanguage(lng) }}
            disabled={i18n.resolvedLanguage === lng}>{lng}</button>)
        }</div>
        </div>

    </div>
}

export default Lang;