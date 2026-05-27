import Banner from './components/Banner'
import './App.css'
import Navber from './components/Navber'
import Aside from './components/Aside'
import Section from './components/Section'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { Suspense } from 'react'
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify'

 const getData=async() =>{
    const res=await fetch("/data.json")
 return  res.json()

 }
 


function App() {

  const promise=getData()

  return (
    <>
    <ToastContainer></ToastContainer>
    <Navber></Navber>

  <Banner></Banner>
  <div  className=' mx-auto bg-gradient-to-b from-indigo-600 to-purple-600 p-6   my-30'>
    <div className=' w-full max-w-7xl grid   grid-cols-2 px-4 md:grid-cols-3 gap-10 mx-auto  text-white'>
    <div>
      <h1 className='font-bold text-6xl mr-10 '>50K+</h1>
    <p >Active Users</p>
      </div>
      <div>
        <h1 className='font-bold text-6xl'>200+</h1>
    <p>Premium Tools</p>
      </div>
    <div>
        <h1 className='font-bold text-6xl'>4.9</h1>
    <p>Rating</p>
  
    </div>
  </div>
  </div>

  <Aside></Aside>
  <Suspense fallback={<Loading></Loading>}>
    <Cards promise={promise}></Cards>

  </Suspense>

  <Section></Section>
  <Footer></Footer>
    </>
  )
}

export default App
