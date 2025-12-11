import HomeBg from '/image/montain.png'
// home page ni qilish 
export default function Home() {
    return (
        <div className='Home w-full h-full text-white bg-[#0000007d] font-Poppins flex justify-center items-center relative'>
            <div className="w-full flex flex-col gap-5 px-5 py-4">
                <h2 className=''>You got the travel plans, we got the travel vans.</h2>
                <h3>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
                <button className='w-full h-[50px] bg-[#FF8C38] rounded flex justify-center items-center'>Find your van</button>
            </div>
            <img className='bg' src={HomeBg} alt={HomeBg} />
        </div>
    )
}