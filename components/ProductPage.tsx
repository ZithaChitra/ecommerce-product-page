import React from "react";
import {useState} from 'react'
import Image from "next/image";
import Link from "next/link";


import ProdViewer from "./ProdViewer";

import styles from "../styles/components/ProductPage.module.css";
import cart from "../public/images/icon-cart.svg";



interface Product{
  id: number;
  company: string;
  title: string;
  description: string;
  pricing: {
    price: number;
    discount: string;
    basePrice: number;
  };
  images: {
    primary: string[];
    thumbnails: string[]
  }
}


interface Props {
  prodFocusHandler: () => void;
  product: Product;
  addProd: (id: number, title: string, price: number, thumbnail: string, quantity: number) => void
}

const ProductPage: React.FC<Props> = ({ prodFocusHandler, product, addProd }) => {
  const [quantity, setQuantity] = useState(0)

  const addQty = ()=>{
    setQuantity(prev=>{
      return prev+1
    })
  }

  const del = ()=>{
    setQuantity(prev => {
      if(prev === 0){
        return 0
      }else{
        return prev - 1
      } 
    })
  }


  return (
    <div className={`${styles.product}`}>
      <div>
        <ProdViewer
          prodFocusHandler={prodFocusHandler}
          prodImages={product.images}
        />
      </div>

      <div className={`${styles.product__info} pad-lr`}>
        <h4>{product.company}</h4>
        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <div
          className={`${styles.product__info__pricing} flex flex-ai-c flex-jc-sb`}
        >
          <div className="flex flex-ai-c ">
            <span className={`${styles["product__info__pricing-price"]}`}>
              ${product.pricing.price}.00
            </span>
            <span
              className={`${styles["product__info__pricing-discount"]} flex flex-jc-c flex-ai-c`}
            >
              {product.pricing.discount}
            </span>
          </div>
          <div>
            <span className={`${styles["product__info__pricing-original"]}`}>
              ${product.pricing.basePrice}.00
            </span>
          </div>
        </div>
        <div className={`${styles["product__info__ctr__cta"]}`}>
          <div className={`${styles.product__info__controls} flex flex-ai-c flex-jc-sb`} >
            <div className={`${styles["product__info__controls-subtract"]} flex flex-ai-c`}
                onClick={del} >
              <span></span>
            </div>

            <div className={`${styles["product__info__controls-total"]} flex flex-ai-c`} >
              <span>{quantity}</span>
            </div>

            <div className={`${styles["product__info__controls-add"]} flex flex-ai-c`}
                onClick={addQty}>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`${styles.product__cta} flex flex-ai-c flex-jc-c`}>
            <Link href="">
              <a className="cta" onClick={()=>addProd(
                product.id,
                product.title,
                product.pricing.price,
                product.images.thumbnails[0],
                quantity
              )}>
                <div className={`${styles.image} img`}>
                  <Image src={cart} alt="" layout="fill" />
                </div>
                Add to cart
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
