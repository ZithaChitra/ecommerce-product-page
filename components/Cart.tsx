import  React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import CartInfo from './CartInfo'
import styles from '../styles/components/Cart.module.css'

import cart_icon from '../public/images/icon-cart.svg'


interface Props{
    isCartInfo: boolean;
    prodDel: (id: number) => void;
    toggleCartInfo: () => void;
    cart: {
        id: number;
        title: string;
        quantity: number;
        price: number;
        total: number;
        thumbnail: string
    }[]
}



const Cart: React.FC<Props> = ({cart, isCartInfo, prodDel, toggleCartInfo}) => {
    const [cart_, setCart] = useState(cart)
    console.log(`cart_.length: ${cart_.length}`);
    
    return (
        <div>
            <div className={`${styles.nav__cart} img`} onClick={toggleCartInfo}>
              <Image src={cart_icon} layout='fill'/>

              <span className={`${cart_.length > 0 ? styles.open : ''}`}>{cart_.length}</span>  
            </div>

            <CartInfo products={cart_} isCartInfo={isCartInfo} prodDel={prodDel}/>
        </div>
    )
}

export default Cart
