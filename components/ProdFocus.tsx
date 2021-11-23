import React from 'react'
import ProdViewer from './ProdViewer'
import Backdrop from './Backdrop'

import styles from '../styles/components/ProdFocus.module.css'

const ProdFocus = () => {
    const isOpen = true
    const clickHandler = ()=>{

    }

    return (
        <div className={`${styles.focus} flex flex-ai-c flex-jc-c hide-for-tablet`}>
            <div className={`${styles.focus__prodviewer}`}>
                <ProdViewer open={isOpen}/>
            </div>
            <Backdrop isOpen={isOpen} clickHandler={clickHandler}/>            
        </div>
    )
}

export default ProdFocus
