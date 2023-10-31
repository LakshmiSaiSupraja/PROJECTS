import React from 'react'
import NavBarr from '../Components/Nav'
function AboutScreen() {
  return (
    <div>

<NavBarr/>

       <div class="card" style={{width:600,height:"300",marginLeft:"auto",marginRight:"auto"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h5 class="card-title">THE FASHION STORE caters to thoughtful shoppers who appreciate unique designs 
and top quality pieces you just can’t find anywhere else. We are constantly curating 
fresh new collections and looking for the next big thing our customers will love. 
Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our 
expert service and care.</h5>

  </div>
</div>
<div style={{display:"flex",marginLeft:200,marginRight:"auto"}}>
<div class="card" style={{width:"300px",marginTop:"20px"}}>
  <div class="card-body">
  <h5 class="card-title">Our Mission is to make a difference through our branding by 
  staying ahead of the fashion trends, defining style and giving customers what they want.
</h5>

  </div>
</div>

<div class="card" style={{width:"300px",marginTop:"20px"}}>
  <div class="card-body">
  <h5 class="card-title">Our Vision is to change the way our society connects with the 
  fashion industry by providing our customers with products that are ethically and 
  responsibly sourced.</h5>


  </div>
</div>
</div>




      
    </div>
  )
}

export default AboutScreen