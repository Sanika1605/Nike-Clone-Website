import React from 'react'
import {Cart,FlexContent, Hero,Sales,Stories,Footer,Navbar} from './components';
import { heroapi,popularsales,toprateslaes,highlight,sneaker,story, footerAPI } from './data/data.js';
const App = () => {
  return (
  <>
  <Navbar/>
  <Cart/>
<main className='flex flex-col gap-16 relative'>
  <Hero heroapi={heroapi}/> 
  <Sales endpoint={popularsales} ifExists />
  <FlexContent endpoint={highlight} ifExists/>
  <Sales endpoint={toprateslaes}/>
  <FlexContent endpoint={sneaker}/>
  <Stories story={story}/>
</main>
<Footer footerAPI={footerAPI}/>
  </>
  )
}

export default App













//rafec and enter we will get this code
//<Hero/> -->it is a hero component and we have elaboated in the component folder in hero file , likewise we cann add more component and put our code very clean
//here we have popularsales,toprateslaes but there were having two different end points now first we have to make single endpoint to wrok on it ,likewise we can use two component in the same file
//npm install @reduxjs/toolkit
// npm install react-redux
//npm i react-hot-toast