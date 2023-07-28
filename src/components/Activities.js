import React from "react";

const Activities=() =>{
    return(
        <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px] ">
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-2xl font-bold ">Da Nang</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://baoninhbinh.org.vn/DATA/ARTICLES/2022/10/6/top-10-dia-diem-du-lich-da-nang-duoc-khach-du-lich-yeu-thich-2664a.jpg" alt=""></img>
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-2xl font-bold ">Quang Tri</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://cdn.tgdd.vn/Files/2021/07/03/1365421/10-dia-diem-du-lich-quang-tri-dang-di-nhat-202206071023104118.jpg" alt=""></img>
            </div>
            <div className="relative p-4">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-2xl font-bold ">Hue</h3>
                <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://vebanahills.com/wp-content/uploads/2022/02/dia-diem-du-lich-hue.jpg" alt=""></img>
            </div>
        </div>
    )

}
export default Activities;