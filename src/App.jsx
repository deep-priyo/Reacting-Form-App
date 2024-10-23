import React, { useState } from "react";
import Cards from "./assets/components/Cards";
import Form from "./assets/components/Form";

const App = () => {
  const [users, setUsers] = useState([])
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards users={users} />
        <Form />
      </div>
    </div>);
};

export default App;
