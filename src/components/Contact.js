import React from "react";

const Contact=() =>{
    return(
        <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-gray-700">Send us a message</h2>
            <p className="text-center text-gray-700 py-2 ">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]" src="https://divui.com/blog/wp-content/uploads/2018/02/lich-trinh-du-lich-da-nang-hoi-an-3ngay-2-dem-5-1024x678.jpg" alt=""></img>
                <form>
                    <div className="grid md:grid-cols-2">
                        <input className="border m-2 p-2  " type="text" placeholder="First"></input>
                        <input className="border m-2 p-2 " type="text" placeholder="Last"></input>
                        <input className="border m-2 p-2 " type="email" placeholder="Email"></input>
                        <input className="border m-2 p-2 " type="tel" placeholder="Phone"></input>
                        <input className="border col-span-2 p-2 m-2" type="text" placeholder="Address"></input>
                        <textarea className="border col-span-2 m-2 p-2" cols={30} rows={10}></textarea>
                        <button className="col-span-2 m-2" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Contact;