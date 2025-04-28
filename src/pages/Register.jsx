import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your last name"
          />
        </div>

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
            Already have an account?{" "}
            {/* <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a> */}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
