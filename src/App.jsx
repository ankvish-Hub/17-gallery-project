import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((user) => (
      <div
        key={user.id}
        className="w-60 bg-gray-800 rounded overflow-hidden shadow-lg"
      >
        <img
          src={user.download_url}
          alt={user.author}
          className="w-full h-40 object-cover"
        />
        <div className="px-4 py-2">
          <div className="font-bold text-white text-lg mb-2">{user.author}</div>
          <p className="text-gray-300 text-sm">ID: {user.id}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className="h-screen bg-black text-white p-4 overflow-auto">
      <h1 className="">Gallery Page {index}</h1>
      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div className="gap-6 flex justify-center items-center p-4">
        <button
          className="bg-amber-500 text-black rounded px-4 cursor-pointer active:scale-95 font-semibold"
          onClick={() => {

            if(index>1){
              setIndex(index-1);
            }
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-500 text-black rounded px-4 cursor-pointer active:scale-95 font-semibold"
          onClick={() => {
            setIndex(index+1);
            
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
