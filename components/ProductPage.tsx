import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProdViewer from "./ProdViewer";

import styles from "../styles/components/ProductPage.module.css";
import cart from "../public/images/icon-cart.svg";
import Images from "../types";

interface Props {
  prodFocusHandler: () => void;
  prodImages: Images;
}

const ProductPage: React.FC<Props> = ({ prodFocusHandler, prodImages }) => {
  return (
    <div className={`${styles.product}`}>
      <div>
        <ProdViewer
          prodFocusHandler={prodFocusHandler}
          prodImages={prodImages}
        />
      </div>

      <div className={`${styles.product__info} pad-lr`}>
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div
          className={`${styles.product__info__pricing} flex flex-ai-c flex-jc-sb`}
        >
          <div className="flex flex-ai-c ">
            <span className={`${styles["product__info__pricing-price"]}`}>
              $125.00
            </span>
            <span
              className={`${styles["product__info__pricing-discount"]} flex flex-jc-c flex-ai-c`}
            >
              50%
            </span>
          </div>
          <div>
            <span className={`${styles["product__info__pricing-original"]}`}>
              $250.00
            </span>
          </div>
        </div>
        <div className={`${styles["product__info__ctr__cta"]}`}>
          <div
            className={`${styles.product__info__controls} flex flex-ai-c flex-jc-sb`}
          >
            <div
              className={`${styles["product__info__controls-subtract"]} flex flex-ai-c`}
            >
              <span></span>
            </div>

            <div
              className={`${styles["product__info__controls-total"]} flex flex-ai-c`}
            >
              <span>3</span>
            </div>

            <div
              className={`${styles["product__info__controls-add"]} flex flex-ai-c`}
            >
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`${styles.product__cta} flex flex-ai-c flex-jc-c`}>
            <Link href="">
              <a className="cta">
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
