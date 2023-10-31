import React, { useEffect, useState } from 'react'
import NavBarr from '../Components/Nav'
import axios from 'axios'
import "../Components/styling.css"

import CardData from '../Components/CardAligner'
function HomeScreen() {
  const[productData,setproductData]=useState([])
  useEffect(
    ()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(response=>setproductData(response.data))

    },[]
  )
  return (
    <div>
        <NavBarr/>
        <h1 className={'dfg'}>Fashion Store</h1>

        <CardData productData={productData}/>
    </div>

  )
}

export default HomeScreen