export default function Login() {
    return (
        <div className='w-full h-[400px] flex flex-col gap-3 justify-center items-center bg-[#FFF7ED]'>
            <div className="w-full h-fit flex flex-col gap-5">
                <span className="text-center text-[25px] font-semibold ">Sign in to your account</span>

                <div className="w-full flex flex-col gap-4 grow px-3 " >
                    <div className="flex flex-col w-full">
                        <input className="w-full h-[40px] shadow-2xl pl-[10px] border border-gray-400 bg-[#ffff] rounded" placeholder='Email address' type="text" />
                        <input className="w-full h-[40px] shadow-2xl pl-[10px] border border-gray-400 bg-[#ffff] rounded" placeholder='Email address' type="text" />
                    </div>
                    <button className='w-full h-[50px] bg-[#FF8C38] text-white font-semibold'>Sign in</button>
                </div>

                <h4 className="text-center text-[18px]">Don’t have an account? <span className='text-[#FF8C38]'>Create one now</span></h4>
            </div>
        </div>
    )
}
