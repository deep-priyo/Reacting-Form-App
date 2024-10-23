import React, { useState } from "react";
import Cards from "./assets/components/Cards";
import Form from "./assets/components/Form";

const App = () => {
  const [users, setUsers] = useState([])
  const handleFormSubmitData = (data) => {
    setUsers([...users, data])
  }
  const handleRemoveData = (id) => {
    setUsers(() => users.filter((item, index) => id != index))
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemoveData} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>);
};

export default App;
