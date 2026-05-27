import Banner from './components/Banner'
import './App.css'
import Navber from './components/Navber'
import Aside from './components/Aside'
import Section from './components/Section'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { Suspense, useState } from 'react'
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify'
import Sec2 from './components/Sec2'
import Carts from './components/Carts'

 const getData=async() =>{


    const res=await fetch("/data.json")
 return  res.json()

 }
 


function App() {

  const promise=getData()
  const [show ,setShow]=useState("Products")
  
  const [activeCarts,setactiveCarts]=useState([])

 console.log("activeCarts",activeCarts)

  return (
    <>
    <ToastContainer></ToastContainer>
    <Navber></Navber>

  <Banner></Banner>
    
  <Sec2></Sec2>

  <Aside></Aside>
       <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed <br></br>
          to boost your productivity and creativity.
        </p>
      </div>

     {/* tabs */}
     <div className="tabs tabs-box flex justify-center items-center mx-auto border-none bg-white mt-5">
      <input type="radio" name="my_tabs_1" className="tab rounded-full pl-4 w-30" aria-label="Products" defaultChecked  onClick={()=>setShow("Products")} />
      <input type="radio" name="my_tabs_1" className="tab rounded-full pl-4 w-30" aria-label="Carts" onClick={()=> setShow("Carts")} />
    
    </div>
  <Suspense fallback={<Loading></Loading>}>
  {show === "Products" && <Cards  promise={promise} activeCarts={activeCarts} setactiveCarts={setactiveCarts}></Cards>}

  </Suspense>
    {show === "Carts" && <Carts carts={activeCarts} set={setactiveCarts} />}
  <Section></Section>
  <Footer></Footer>
    </>
  )
}

export default App
