


import {GoVerified, GoSearch} from "react-icons/go"
import {FaUserGraduate, FaUsers, FaUserAlt} from "react-icons/fa"
import {BiTime} from "react-icons/bi"
import {BsFillAwardFill} from "react-icons/bs"
import {IoMdStar} from "react-icons/io"

export default function TradeMark() {

    return <>
    <div>
    {/* <GoVerified />  <BiTime /> <IoMdStar /> */}
    </div>
   <section className="trade-mark-section -mt-16 sm:-mt-0 flex flex-col items-center justify-center px-6 md:px-16">

<div className="w-full space-y-10 md:space-y-0 py-10 md:py-16 md:flex items-center justify-between">

<div className="trade-mark-card">
        <span className="text-4xl md:text-5xl text-indigo-600"> <BsFillAwardFill /></span>
        <div className="flex flex-col items-start justify-start pl-8">
            <h3 className="font-bold md:text-2xl">1200+</h3>
            <p className="md:text-lg mt-2">Special Courses</p>
        </div>
    </div>


    <div className="trade-mark-card">
        <span className="text-4xl md:text-5xl text-indigo-600"> < FaUserGraduate /></span>
        <div className="flex flex-col items-start justify-start pl-8">
            <h3 className="font-bold md:text-2xl">24200+</h3>
            <p className="md:text-lg mt-2">Enrolled Students</p>
        </div>
    </div>

    <div className="trade-mark-card">
        <span className="text-4xl md:text-5xl text-indigo-600"> <FaUsers /></span>
        <div className="flex flex-col items-start justify-start pl-8">
            <h3 className="font-bold md:text-2xl">1000+</h3>
            <p className="md:text-lg mt-2">Expert Instructors</p>
        </div>
    </div>

</div>
    </section>
</>
}