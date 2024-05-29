import React from "react";

const Body = () =>{
    return (
        <div className="space-y-4 lg:flex">
            <div className="flex flex-row justify-center items-center lg:flex-1 lg:order-2 lg:justify-end">
                <img src="Blue-Shape.svg" alt="1st" className=" -rotate-45 h-64 md:h-72 lg:h-[400px] "></img>
                <img src="Pink-Shape.svg" alt="1st" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"></img>
                <img src="Purple-Shape.svg" alt="1st" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"></img>
                <img src="Hero-Model.png" alt="1st" className="absolute h-64 md:h-72 lg:h-[400px]"></img>
            </div>
            <div className="lg:flex-1 lg:order-1">
                <h1 className="text-5xl font-bold font-playfair leading-tight ">Host your website in less than 5 minutes</h1>
                <p className="font-lato text-gray-400">With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing package available.</p>
                <form action="" className="flex flex-col gap-4 md:flex-row ">
                    <input type="email" placeholder="Enter email " className="rounded-md px-4 py-3 placeholder:text-gray-400" />
                    <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">join waitlist!</button>
                </form>
                <div className="flex gap-2 ">
                    <img src="Checkmark.svg" alt="image"></img>
                    <p className="font-lato text-gray-400 ">No spam ,ever . Unsubscribe anytime </p>
                </div>
            </div>
        </div>
    )
}

export default Body