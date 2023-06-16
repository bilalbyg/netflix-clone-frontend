import Input from "@/components/Input";
import axios from "axios"
import { useState, useCallback } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign up</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Name"
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
                id="username"
                type="text"
                value={name}
              />
              <Input
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
              {/* <Input
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              /> */}
            </div>
            <button onClick={register} className="bg-[#e50914] text-white rounded-md w-full mt-10 py-3 font-semibold">
              Sign Up 
            </button>
            <p className="text-neutral-500 mt-12">
              Already have an account?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
