import React from "react";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/components/ProdViewer.module.css";


interface Images {
  primary: string[];
  thumbnails: string[];
}

interface Props {
  prodFocusHandler: () => void;
  prodImages: Images;
  open?: boolean;
}

// const prodImages: Images = products.shoe.images

const ProdViewer: React.FC<Props> = ({
  open,
  prodFocusHandler,
  prodImages,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const next1 = () => {
    setCurrentImage((current) => {
      const nextImage = current + 1;
      if (nextImage < prodImages.primary.length) {
        return nextImage;
      } else {
        return 0;
      }
    });
  };

  const prev1 = () => {
    setCurrentImage((current) => {
      const prevImage = current - 1;
      if (prevImage < 0) {
        return prodImages.primary.length - 1;
      } else {
        return prevImage;
      }
    });
  };

  return (
    <div className={`${styles.prod} ${open === true ? styles.open : ""}`}>
      <div className={`${styles.prod__image}`}>
        <Image src={prodImages.primary[currentImage]} alt="" layout="fill" />

        <div className={`${styles.prod__controls}`}>
          <div
            className={`${styles["prod__controls-left"]} ${
              open === true ? styles.open : ""
            }
                     flex flex-ai-c flex-jc-c`}
            onClick={prev1}
          >
            <span></span>
            <span></span>
          </div>

          <div
            className={`${styles["prod__controls-right"]} ${
              open === true ? styles.open : ""
            } 
                        flex flex-ai-c flex-jc-c`}
            onClick={next1}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="">
        <div className={`${styles["prod__image-thumbnails"]}`}>
          {prodImages.thumbnails.map((thumbnail, index) => {
            return (
              <div className={`${styles["prod__image-thumbnail"]}`} key={index}>
                <Image
                  src={thumbnail}
                  alt=""
                  layout="fill"
                  onClick={prodFocusHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProdViewer;
