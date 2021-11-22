import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/components/ProductPage.module.css'
import cart from '../public/images/icon-cart.svg'
import prod_image from '../public/images/image-product-1.jpg'
import thumb1 from '../public/images/image-product-1-thumbnail.jpg'
import thumb2 from '../public/images/image-product-2-thumbnail.jpg'
import thumb3 from '../public/images/image-product-3-thumbnail.jpg'
import thumb4 from '../public/images/image-product-4-thumbnail.jpg'


const ProductPage: React.FC = () => {
    return (
        <div className={`${styles.product}`}>
            <div className={`${styles.product__image}`}>
                <Image src={prod_image} alt='' layout='fill'/>

                {/* <div className={`${styles['product__image-thumbnails']} hide-for-tablet`}>
    
                    <div className={`${styles['product__image-thumbnail']}`} > 
                        <Image src={thumb1} alt='' layout='fill'/>
                    </div>

                    <div className={`${styles['product__image-thumbnail']}`} > 
                        <Image src={thumb2} alt='' layout='fill'/>
                    </div>

                    <div className={`${styles['product__image-thumbnail']}`} > 
                        <Image src={thumb3} alt='' layout='fill'/>
                    </div>

                    <div className={`${styles['product__image-thumbnail']}`} > 
                        <Image src={thumb4} alt='' layout='fill'/>
                    </div>
                </div> */}
            </div>

            <div className={`${styles.product__info} pad-lr`}>
                <h4>Sneaker Company</h4>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className={`${styles.product__info__pricing} flex flex-ai-c flex-jc-sb`}>
                    <div className="flex flex-ai-c ">
                        <span className={`${styles['product__info__pricing-price']}`}>$125.00</span>
                        <span className={`${styles['product__info__pricing-discount']} flex flex-jc-c flex-ai-c`}>50%</span>
                    </div>
                    <div>
                        <span className={`${styles['product__info__pricing-original']}`}>$250.00</span>
                    </div>
                </div>

                <div className={`${styles.product__info__controls} flex flex-ai-c flex-jc-sb pad-lr`}>
                    <div className={`${styles['product__info__controls-subtract']} flex flex-ai-c`}>
                        <span></span>
                    </div>

                    <div className={`${styles['product__info__controls-total']} flex flex-ai-c`}>
                        <span>3</span>
                    </div>

                    <div className={`${styles['product__info__controls-add']} flex flex-ai-c`}>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`${styles.product__cta} flex flex-ai-c flex-jc-c`}>
                    <Link href=''>
                        <a className='flex flex-ai-c flex-jc-c'>
                            <div className={`${styles.image}`}>
                                <Image src={cart} alt='' layout='fill'/>
                            </div>
                            Add to cart
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
