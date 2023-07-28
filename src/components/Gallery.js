import React from "react";

const Gallery=() =>{
    return(
        <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16 ">
        <h2 className="text-center text-gray-500 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
            <div className="sm:col-span-3 col-span-2 row-span-2">
                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/7715276/pexels-photo-7715276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
            </div>
            <div>
                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
            </div>
            <div>
                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/8904404/pexels-photo-8904404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
            </div>
            <div>
                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
            </div>
            <div>
                <img className="w-full h-full object-cover" src="https://owa.bestprice.vn/images/articles/uploads/5-diem-den-noi-tieng-cua-thanh-pho-dang-song-nhat-viet-nam-56cc06bba420f.jpg" alt=""></img>
            </div>
        </div>
        </div>
    )

}
export default Gallery;