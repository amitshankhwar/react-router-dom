import { useEffect, useState } from "react";

function UseEffectHook() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useeffect hook called"); // api calling 1hr

    return () => {
      return console.log("cleanup function called"); // cleanup function (unmounting phase) (optional)
    };
  }, []); // [] -> initial render only (empty array) (optional) (dependency array)
  //dependencies array - [] -> initial render only

  function handleClick() {
    setCount(count + 1);
    console.log("button clicked");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1>Hello I am useEffect Hook..</h1>
      <h2 className="font-bold text-2xl">{count}</h2>
      <button className="border p-2" onClick={handleClick}>
        increment
      </button>
    </div>
  );
}

export default UseEffectHook;

//Another -> pascal
//myNameIs -> camel
//my_name_is -> snake
//my-name-is -> kebab
