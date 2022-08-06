import { useState } from "react";
import InputForm from "./components/InputForm";
import User from "./components/User";

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge , id: Math.random().toString()}]
    })
  }


  return (
    <>
      <InputForm  onAddUser={addUserHandler}/>
      <User users={usersList}/>
    </>
  );
}

export default App;
