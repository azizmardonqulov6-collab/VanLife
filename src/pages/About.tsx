import { Link } from 'react-router-dom'
import AboutImg from '/image/about-img.png'
// Aobut page ni tugatish 
export default function About() {
    return (
        <div className='w-full  flex flex-col gap-5 overflow-y-scroll'>
            <div className="img w-full ">
                <img className='w-full' src={AboutImg} alt={AboutImg} />
            </div>
            <div className="about-lable  flex flex-col gap-2 px-4 py-6">
                <h2 className='text-[#333] font-[700] text-[28px]'>
                    Don’t squeeze in a sedan when you could relax in a van.
                </h2>
                <h3>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    <br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</h3>
            </div>
            <div className="info-con w-full px-5  mb-4 lg:w-fit">
                <div className="about-info flex flex-col gap-5 bg-[#FFCC8D] px-6 py-8">
                    <h2 className='info-text '>Your destination is waiting. <br />
                        Your van is ready.</h2>
                    <Link to="/vans" className='w-fit px-5 py-3 bg-black text-white rounded-[5px]'>Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}
