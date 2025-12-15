import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <div className="notFound w-full h-screen flexr items-start pt-[100px] ">
        <div className="main flex flex-col gap-3 px-4 lg:items-center lg:pt-7">
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link to="/" className="h-[50px] text-[15px] px-8 flex items-center justify-center bg-black text-white  py-1.5 rounded text-xs sm:text-sm font-semibold lg:w-fit">Return to home</Link>
        </div>
    </div>
  )
}
