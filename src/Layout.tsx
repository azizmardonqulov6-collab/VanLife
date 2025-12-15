import Header from './conpanents/Header'
import Footer from './conpanents/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div className='flex flex-col w-full h-screen bg-[#FFF7ED]'>
        <Header />
        <main className='main'>
            <Outlet /> 
        </main>
        <Footer />
    </div>
  )
}