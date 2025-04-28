import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
