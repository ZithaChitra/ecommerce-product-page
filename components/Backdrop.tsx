import React from "react";
import styles from "../styles/components/Backdrop.module.css";

interface Props {
  isOpen: boolean;
  clickHandler: () => void;
}

const Backdrop: React.FC<Props> = ({ clickHandler, isOpen }) => {
  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : ""}`}
      onClick={() => clickHandler()}
    />
  );
};

export default Backdrop;
