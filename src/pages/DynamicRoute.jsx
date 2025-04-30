import { useParams } from "react-router-dom";

function DynamicRoute() {
  let val = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1>Dynamic Route</h1>
      <p>
        Welcome to my dynamic Route. <b>{val.id}</b>
      </p>
    </div>
  );
}

export default DynamicRoute;
