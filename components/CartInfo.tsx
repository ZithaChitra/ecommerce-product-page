import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/CartInfo.module.css'

import del from '../public/images/icon-delete.svg'

interface ProductInfo{
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
}

interface Props{
  isCartInfo: boolean;
  products: ProductInfo[],
  prodDel: (id: number) => void
}

const CartInfo:React.FC<Props> = ({products, prodDel, isCartInfo}) => {
    return (
            <div className={`${styles.nav__cart__info} ${isCartInfo === true ? styles.open : ''}`}>
              <h3>Cart</h3>
              {/* {if(products){
                return(

                )
              }else{
            
              }
              } */}
              <div>
                  {products.map(product=>{
                    return (
                      <div className='flex flex-ai-c flex-jc-sb'>
                          <div className={`${styles['nav__cart__prod']} flex flex-ai-c`}>
                            <div className={`${styles['nav__cart__prod-img']} img`}>
                              <Image src={product.thumbnail} layout='fill' />
                            </div>
                            <div className='flex flex-c'>
                              <p>
                                {product.title}
                              </p>
                              <p>
                                {`$${product.price} x ${product.quantity}`} <span>{`$${product.total}`}</span>
                              </p>
                            </div>
                          </div>

                          <div className={`${styles['nav__cart__prod-del']} img`} onClick={()=>prodDel(product.id)}>
                            <Image src={del} layout='fill'/>
                          </div>
                        </div>
                      )
                    })}


                <div>
                  <button className='cta'>Checkout</button>
                </div>
              </div>
            </div>
    )
}

export default CartInfo
