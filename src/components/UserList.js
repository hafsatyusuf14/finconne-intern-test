import React, { useState } from "react";
import { motion } from "framer-motion";
import UserCard from "./UserCard";

const UserList = () => {
  const initialUsers = [
    {
      id: 1,
      name: "Sadiq",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuRXe7gJVtj1OdQ_6J9vodJMU-SB9ZjFdUg&s",
    },
    {
      id: 2,
      name: "Chigozie",
      imageUrl:
        "https://pics.craiyon.com/2023-11-30/OQexP4wzQo6O071XjfzTPA.webp",
    },
    {
      id: 3,
      name: "Hafsah",
      imageUrl:
        "https://storage.googleapis.com/pfpai/styles/0a30bccb-fd50-4847-a9ca-4ea9550baa48.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20241026%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241026T020933Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=977676b076e810595812eaed9e7370b390865698f91d983b4bb8ac67ce365e1da535284d63b1f3dfb44c6136e0102da99305134e58364919764bf40fc2254d55a92869bda1633ba0d6715423afa5d6a4c89aced12a5445d495021402eb983b5245311b75d045844bfa8ad911c950cbf0161387a6ca40ab3f63d97929feee669e5b14ad37374335b3b835678b0b37f5823b1e5b505bd2e778ef238a451112aeb4a5276c66a172d0fbfe557c9749229687c54b2047e8eac3868a53b7ef2a537c44afa766f453e4ab2b6ecf2dba941ee53e187a4c803161cd99782e482ae1bfe438f7f93cb2ff8ae62012b8e8812068fad4f008f928f93e64e9fc6cb70d754c60de",
    },
    {
      id: 4,
      name: "Abdulateef",
      imageUrl:
        "https://i.pinimg.com/originals/76/80/4f/76804f67ba38f85e4802d250e5b15504.jpg",
    },
    {
      id: 5,
      name: "Olasubomi",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-qISFMDydsBk7Czv9hwxeZmMusPUysOqig&s",
    },
    {
      id: 6,
      name: "Enitan",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556787.jpg",
    },
    {
      id: 7,
      name: "Aisha",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalbNUoJMhlIK67Vb8oKvmzqivjFOW9Fzd6w&s",
    },
    {
      id: 8,
      name: "Halima",
      imageUrl:
        "https://storage.googleapis.com/pfpai/styles/6dc2813b-7edf-495d-a83e-8a532119d653.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20241026%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241026T020933Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=9c246a44474e8d25c82f93059492853ef37b2360bf60583b1da9e01a4aa0ebed5bfcc60648779ae0350e430122e018f26787a5223d360ba62ef75de2342bc02d64244b1696ba1573a5ad3591bb01e0e06adedefba848983d37d0e405278972c4c05635fb20d434f807e24872c0385c728534c7881ae52843806cfcbc4ec3991b21af4acd62423ed6f5c430c856788072f2b1ec366028a0d58b72f49a1d802503a1107c911a877ed346175d9b40f7e54e47e4b27a3e0c0b20fab49895f50a45c62fb08cf611dbe5edfe99d32f72104b6f2e369da0ca8d3101d5a32ee9b220a797ec15d40cdc8422140653b3efbb02b1d1b25a2ae104d20a6729f288ba41a1bfc9",
    },
    {
      id: 9,
      name: "Ronke",
      imageUrl:
        "https://img.freepik.com/premium-vector/cute-boy-stand-cartoon_435121-82.jpg",
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  const shuffleUsers = () => {
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffledUsers);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      <button
        onClick={shuffleUsers}
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full mb-4 transition transform hover:scale-105 hover:rotate-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Shuffle Users
      </button>
      <div className="grid gap-6 sm:grid-cols-2">
        {users.map((user) => (
          <motion.div
            key={user.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <UserCard user={user} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
