import React from "react";
import ProdViewer from "./ProdViewer";
import Backdrop from "./Backdrop";

import styles from "../styles/components/ProdFocus.module.css";
import Images from "../types";

interface Props {
  isOpen: boolean;
  backdropClickHandler: () => void;
  prodFocusHandler: () => void;
  prodImages: Images;
}

const ProdFocus: React.FC<Props> = ({
  isOpen,
  backdropClickHandler,
  prodFocusHandler,
  prodImages,
}) => {
  const clickHandler = () => {};

  return (
    <div
      className={`${styles.focus} ${
        isOpen === true ? styles.open : ""
      } flex flex-ai-c flex-jc-c hide-for-tablet`}
    >
      <div className={`${styles.focus__prodviewer}`}>
        <ProdViewer
          open={true}
          prodFocusHandler={prodFocusHandler}
          prodImages={prodImages}
        />
      </div>
      <Backdrop isOpen={isOpen} clickHandler={backdropClickHandler} />
    </div>
  );
};

export default ProdFocus;
