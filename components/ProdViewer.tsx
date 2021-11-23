import React from 'react'
import Image from 'next/image'

import styles from '../styles/components/ProdViewer.module.css'

import products from '../data.json'


interface Images{
    primary: string[];
    thumbnails: string[]
}

interface Props{
    next?: () => void;
    prev?: () => void;
    open?: boolean 
}

const prodImages: Images = products.shoe.images

const ProdViewer:React.FC<Props> = ({next, prev, open}) => {

    const clickHandler = () => {
        // TODO
    }

    return (
        <div className={`${styles.prod} ${open === true ? styles.open : '' }`}>
            <div className={`${styles.prod__image}`}>
                <Image src={prodImages.primary[0]} alt='' layout='fill'/>

                <div className={`${styles.prod__controls}`}>
                    <div className={`${styles['prod__controls-left']} ${open === true ? styles.open : '' } flex flex-ai-c flex-jc-c`}>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`${styles['prod__controls-right']} ${open === true ? styles.open : '' } flex flex-ai-c flex-jc-c`}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>


            <div className=''>
                    <div className={`${styles['prod__image-thumbnails']}`}>
                        {prodImages.thumbnails.map((thumbnail, index) =>{
                            return (
                                <div className={`${styles['prod__image-thumbnail']}`} key={index}> 
                                    <Image src={thumbnail} alt='' layout='fill' onClick={clickHandler}/>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}

export default ProdViewer
