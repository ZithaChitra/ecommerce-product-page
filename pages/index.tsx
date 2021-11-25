import type { NextPage } from "next";
import Head from "next/head";
import Backdrop from "../components/Backdrop";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import ProductPage from '../components/ProductPage'


import React, { Component } from "react";
import ProdFocus from "../components/ProdFocus";

import products from '../data.json'

const product = products.products[0]

interface State{
  isSideDrawer: boolean,
  isProdFocus: boolean,
  isCartInfo: boolean,
  cart: {
    id: number;
    title: string;
    quantity: number;
    price: number;
    total: number;
    thumbnail: string
}[]
}

interface Props{
}


const cart_: {
  id: number;
    title: string;
    quantity: number;
    price: number;
    total: number;
    thumbnail: string
}[] =  []


export class Index extends Component<Props, State> {
  state = { isSideDrawer: false, isProdFocus: false, isCartInfo: false, cart: cart_ };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { isSideDrawer: !prevState.isSideDrawer };
    });
  };

  toggleCartInfo = () => {
    this.setState((prevState)=>{
      return {isCartInfo: !prevState.isCartInfo}
    })
  }

  prodFocusOn = () => {
    this.setState({isProdFocus: true})
  }

  prodFocusOff = () => {
    this.setState({isProdFocus: false})
  }

  addProd = (id: number, title: string, price: number, thumbnail: string, quantity: number) => {
    const product = this.state.cart.find(product=>{
        return product.id === id
    })

    if(product){
        product.quantity = product.quantity + quantity
        product.total = product.quantity * price
        return
    }else{
        const prod = {
            "id": id,
            "title": title,
            "quantity": quantity,
            "price": price,
            "total": price * quantity,
            "thumbnail": thumbnail,
        }
        this.state.cart.push(prod)
    }
  }


  remProd = (id: number) => {
    // a linear search
    const product = this.state.cart.find(product=>{
        return product.id === id
    })
    if(product){
        const index = this.state.cart.findIndex(prod =>{
        prod.id === id
        })
        console.log(`prod_index: ${index}`);
        
        if(index !== -1){
            this.state.cart.splice(index, 1)
        }
    }
  }



  render() {
    console.log(`isDrawerOpen: ${this.state.isSideDrawer}`);
    return (
      <div>
        <Navbar clickHandler={this.toggleMenu} cart={this.state.cart} isCartInfo={this.state.isCartInfo} prodDel={this.remProd} toggleCartInfo={this.toggleCartInfo}/>
        <div className='hide-for-desktop'>
          <SideDrawer clickHandler={this.toggleMenu} isOpen={this.state.isSideDrawer} />
          <Backdrop clickHandler={this.toggleMenu} isOpen={this.state.isSideDrawer} />
        </div>
        <ProductPage prodFocusHandler={this.prodFocusOn} product={product} addProd={this.addProd}/>
        <ProdFocus isOpen={this.state.isProdFocus} backdropClickHandler={this.prodFocusOff} prodFocusHandler={this.prodFocusOn} prodImages={product.images}/>
      </div>
    );
  }
}

export default Index;
