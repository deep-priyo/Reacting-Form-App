import React from "react";

const Card = ({ users }) => {
    return (
        <> {
            users.map((item, index) => {
                return <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
                    <div className="image w-[4vw] h-[4vw] rounded-full bg-zinc-200 overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    <h1 className="mt-1 text-xl font-semibold">Deep</h1>
                    <h4 className="opacity-50 text-xs font-semibold">deep@mail.com</h4>
                    <p className=" mt-1 text-center text-xs font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricie.</p>
                    <button className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove</button>
                </div>
            })}
        </>

    )
};

export default Card;
