import React from "react";
import Card from "./Card";

const Cards = ({ users }) => {
    return <div className="w-full  max-h-96  overflow-auto p-4 flex justify-center gap-4 flex-wrap">
        <Card users={users} />

    </div>;
};

export default Cards;
