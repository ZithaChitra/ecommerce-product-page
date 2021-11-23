import type { NextPage } from "next";
import Head from "next/head";
import Backdrop from "../components/Backdrop";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import ProductPage from '../components/ProductPage'


import React, { Component } from "react";
import ProdFocus from "../components/ProdFocus";

import products from '../data.json'

import Images from "../types";

const prodImages: Images = products.shoe.images

interface State{
  isSideDrawer: boolean,
  isProdFocus: boolean
}

interface Props{
}



export class Index extends Component<Props, State> {
  state = { isSideDrawer: false, isProdFocus: false };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { isSideDrawer: !prevState.isSideDrawer };
    });
  };

  prodFocusOn = () => {
    this.setState({isProdFocus: true})
  }

  prodFocusOff = () => {
    this.setState({isProdFocus: false})
  }


  render() {
    console.log(`isDrawerOpen: ${this.state.isSideDrawer}`);
    return (
      <div>
        <Navbar clickHandler={this.toggleMenu} />
        <div className='hide-for-desktop'>
          <SideDrawer clickHandler={this.toggleMenu} isOpen={this.state.isSideDrawer} />
          <Backdrop clickHandler={this.toggleMenu} isOpen={this.state.isSideDrawer} />
        </div>
        <ProductPage prodFocusHandler={this.prodFocusOn} prodImages={prodImages}/>
        <ProdFocus isOpen={this.state.isProdFocus} backdropClickHandler={this.prodFocusOff} prodFocusHandler={this.prodFocusOn} prodImages={prodImages}/>
      </div>
    );
  }
}

export default Index;
