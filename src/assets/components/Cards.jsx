import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
    return <div className="w-full  max-h-96  overflow-auto p-4 flex justify-center gap-4 flex-wrap">
        {users.map((item, index) => {
            return <Card user={item} id={index} handleRemove={handleRemove} />
        })}


    </div>;
};

export default Cards;
