import React from "react";

const Card = ({ user }) => {
    return (

        <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
            <div className="image w-[4vw] h-[4vw] rounded-full bg-zinc-200 overflow-hidden">
                <img className="w-full h-full object-cover" src={user.image} />
            </div>
            <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
            <h4 className="opacity-50 text-xs font-semibold">{user.email}</h4>
            <p className=" mt-1 text-center text-xs font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricie.</p>
            <button className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove</button>
        </div>



    )
};

export default Card;
