import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/CartInfo.module.css'

import thumbnail from '../public/images/image-product-1-thumbnail.jpg'
import del from '../public/images/icon-delete.svg'

const CartInfo = () => {
    return (
            <div className={`${styles.nav__cart__info}`}>
              <h3>Cart</h3>
              <div className='flex flex-ai-c flex-jc-sb'>
                <div className={`${styles['nav__cart__prod']} flex flex-ai-c`}>
                  <div className={`${styles['nav__cart__prod-img']} img`}>
                    <Image src={thumbnail} layout='fill' />
                  </div>
                  <div className='flex flex-c'>
                    <p>
                      product descritop goes here
                    </p>
                    <p>
                      quantity details here
                    </p>
                  </div>
                </div>
                <div className={`${styles['nav__cart__prod-del']} img`}>
                  <Image src={del} layout='fill'/>
                </div>
              </div>

              <div>
                <button className='cta'>Checkout</button>
              </div>
            </div>
    )
}

export default CartInfo
