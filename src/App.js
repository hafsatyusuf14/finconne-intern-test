import React from "react";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-orange-500 flex flex-col items-center">
      <header className="bg-purple-700 w-full py-6 text-center text-white text-2xl font-bold shadow-md">
        User List
      </header>
      <UserList />
    </div>
  );
};

export default App;
