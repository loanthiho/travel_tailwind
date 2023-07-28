import React from "react";

const Hero=() =>{
    return(
        <div className="w-full h-[90vh]">
            <img src="https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover" alt=""></img>
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full  flex flex-col text-white p-4">
                    <h1 className="font-bold text-4xl"> Private Beaches & Getaways</h1>
                    <h2 className="text-4xl py-4 italic">With travel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.</p>
                </div>
            </div>
        </div>
        
    );

}
export default Hero;