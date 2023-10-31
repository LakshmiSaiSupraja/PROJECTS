import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios'
function ProductDetails() {
const datafromUrl=useParams()
// console.log(datafromUrl)
const [productData,setproductData] = useState({});

useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${datafromUrl.id}`)
    .then((response)=>setproductData(response.data))
   
},[datafromUrl.id])
return (
<div className='style'>
  <div class="card">
<div class="card-body">
         <img style={{width:"100px",height:"100px"}} src={productData.image} alt="product"/>
            <p class="card-text" >
        <p>{productData.id}</p>
        <p>{productData.title}</p>
        <p>{productData.description}</p>
        <p>{productData.rating?.rate}</p>
        <p>{productData.price}</p>
        

    </p>
    
  </div>
</div>
</div>

  )
}

export default ProductDetails