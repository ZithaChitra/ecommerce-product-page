import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/components/SideDrawer.module.css";
import closeToggle from "../public/images/icon-close.svg";

interface Props {
  isOpen: boolean;
  clickHandler: () => void;
}

const SideDrawer: React.FC<Props> = ({ clickHandler, isOpen }) => {
  return (
    <div
      className={`${styles.drawer}  ${
        isOpen ? styles.open : ""
      } pad-l hide-for-desktop`}
    >
      <div className={`${styles.drawer__toggle} img`}>
        <Image onClick={() => clickHandler()} src={closeToggle} />
      </div>

      <div className={`${styles["drawer__links"]} flex flex-c`}>
        <Link href="/">
          <a>Collections</a>
        </Link>
        <Link href="/">
          <a>Men</a>
        </Link>
        <Link href="/">
          <a>Women</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default SideDrawer;
