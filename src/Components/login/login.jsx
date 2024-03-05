import React from "react";

const Login = () => {
  return (
    <div >
      <div className="text-white text-2xl mb-4">
      <h1>WELCOME</h1>
      </div>
      <div className="flex  flex-col justify-center p-5  lg:px-8 bg-white rounded-lg ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" action="#" method="POST">
              <div className="mt-1">
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  placeholder="Employee Id"
                  autocomplete="employeeId"
                  required
                  className="block w-full rounded-md border-0 p-3 bg-[#EFEFEF]  text-gray-800 shadow-sm  placeholder:text-[#CCCCCC]  focus:ring-inset  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              <div className="mt-1">
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  placeholder="User Name"
                  autocomplete="employeeId"
                  required
                  className="block w-full rounded-md border-0 p-3 bg-[#EFEFEF]  text-gray-800 shadow-sm  placeholder:text-[#CCCCCC]  focus:ring-inset  sm:text-sm sm:leading-6 outline-none"
                />
              </div>
              <div className="mt-1">
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  placeholder="Password"
                  autocomplete="employeeId"
                  required
                  className="block w-full rounded-md border-0 p-3 bg-[#EFEFEF]  text-gray-800 shadow-sm  placeholder:text-[#CCCCCC]  focus:ring-inset  sm:text-sm sm:leading-6 outline-none"
                />
              </div>


   
            <div>
            <p className=" px-2 text-sm font-medium text-start text-[#783CB8]">
              Forget Password
            </p>
            </div>

            <div className="grid justify-center ">
              <button
                type="submit"
                className="flex justify-center rounded-lg bg-[#783CB8] w-full px-9 py-3 text-lg font-extrabold leading-6 text-white shadow-sm hover:bg-[#783DB6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
