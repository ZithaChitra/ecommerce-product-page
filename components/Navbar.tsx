import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Navbar.module.css";
import logo from "../public/images/logo.svg";
import openToggle from '../public/images/icon-menu.svg'
import avatar from '../public/images/image-avatar.png'

import Cart from "./Cart";

interface Props{
  clickHandler: () => void;
  isCartInfo: boolean;
  prodDel: (id: number) => void,
  toggleCartInfo: () => void
  cart: {
    id: number;
    title: string;
    quantity: number;
    price: number;
    total: number;
    thumbnail: string
}[]
}

const Navbar: React.FC<Props> = ({clickHandler, cart, isCartInfo, prodDel, toggleCartInfo}) => {
  return (
    <div className={`${styles.nav} flex flex-ai-c flex-jc-sb pad-lr container`}>
      <div className='flex flex-ai-c'>
        <div className={`${styles.nav__toggle} img hide-for-desktop`}>
            <Image onClick={()=> clickHandler()} src={openToggle} alt='mobile nav toggle' layout="fill" />
        </div>

        <div className={`${styles.nav__logo} img`}>
          <Image src={logo} alt="logo" layout="fill" />
        </div>

        <div className={`hide-for-tablet`}>
            <div className={`${styles['nav__links-primary']} flex flex-ai-c`}>
            <Link href='/'><a>Collections</a></Link>
            <Link href='/'><a>Men</a></Link>
            <Link href='/'><a>Women</a></Link>
            <Link href='/'><a>About</a></Link>
            <Link href='/'><a>Contact</a></Link>
            </div>
        </div>
      </div>

      <div className='flex flex-ai-c'>

          <div>
            <Cart cart={cart} isCartInfo={isCartInfo} prodDel={prodDel} toggleCartInfo={toggleCartInfo}/>
          </div>

          <div className={`${styles.nav__avatar} img`}>
            <Image src={avatar} alt="logo" layout="fill" />
          </div>

      </div>
    </div>
  );
};

export default Navbar;
