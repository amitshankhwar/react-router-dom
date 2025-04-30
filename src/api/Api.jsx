import axios from "axios";
import { useEffect, useState } from "react";

function Api() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      async function dataFetching() {
        let { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        //   console.log(data.data);
        console.log(data);
        setUsers([...data]);
      }
      dataFetching();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <h1>{users[0].name}</h1>
      <h1>{users[1].name}</h1>
      <h1>{users[2].name}</h1> */}
      {users.map((item) => {
        return <h1>{item.name}</h1>; //data mapping
      })}
    </div>
  );
}

export default Api;

//axios -> api calling library
//fetch -> api calling method (native)
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
