import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-24 h-24 mx-auto rounded-full shadow-lg"
      />
      <p className="mt-4 text-center text-lg font-semibold text-gray-700">
        {user.name}
      </p>
    </div>
  );
};

export default UserCard;
