import React, { FC } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const Quote :FC=()=>{
    return <div className='quote'> 
    <section>
    <p className='quote-text'><FontAwesomeIcon icon={faQuoteLeft}/> Suspendisse aliquet leo ac risus semper, quis eleifend urna pretium. Donec id risus eget mi lobortis consectetur. 
    Suspendisse egestas mauris nulla, eu eleifend ex vehicula egestas.</p>
    <p className='quote-author'> - Anthony Miles</p>
    </section>
    </div>
}

export default Quote;