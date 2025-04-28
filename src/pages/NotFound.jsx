import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <Link
        to="/"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
