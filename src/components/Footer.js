import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Footer=() =>{
    return(
        <div className="max-w-[1140px] w-full m-auto py-8 border-t-4 bg-slate-900">
            <div className="flex items-center m-auto justify-center">
                <BsChatSquareDots size={30} className="text-[var(--primary-dark)]"/>
                <h1 className="text-xl font-bold text-gray-300">Travel</h1>
            </div>
        </div>
    )

}
export default Footer;