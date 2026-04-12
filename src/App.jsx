import Banner from './components/Banner'
import './App.css'
import Navber from './components/Navber'
import Aside from './components/Aside'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navber></Navber>

  <Banner></Banner>
  <div  className='w-full bg-gradient-to-b from-indigo-600 to-purple-600 p-10  my-30'>
    <div className='grid grid-cols-3 gap-10 mx-auto w-7/12 text-white'>
    <div>
      <h1 className='font-bold text-6xl '>50K+</h1>
    <p className='pl-4'>Active Users</p>
      </div>
      <div>
        <h1 className='font-bold text-6xl'>200+</h1>
    <p className='pl-4'>Premium Tools</p>
      </div>
    <div>
        <h1 className='font-bold text-6xl'>4.9</h1>
    <p className='pl-5'>Rating</p>
  
    </div>
  </div>
  </div>

  <Aside></Aside>

  <Section></Section>
  <Footer></Footer>
    </>
  )
}

export default App
