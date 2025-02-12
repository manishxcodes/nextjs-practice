"use client"

import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../actions/user";

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return (
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div className="w-96 flex flex-col bg-slate-100 rounded-lg py-2 px-5">
            <div className="text-3xl text-center font-extrabold mb-4">
              Sign up
            </div>
            <InputBox label={"First Name"} placeholder={"John"} type={"text"} onChange={(e) => {setFirstName(e.target.value)}}/>
            <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"} onChange={(e) => {setLastName(e.target.value)}} />
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} type={"text"} onChange={(e) => {setEmail(e.target.value)}} />
            <InputBox label={"Password"} placeholder={"minimum 8 digit"} type={"password"} onChange={(e) => {setPassword(e.target.value)}} />
            <div className="flex justify-center items-center">
              <button className="my-2 bg-black text-white text-sm px-4 py-2 rounded-md" onClick={async () => {
                await axios.post("http://localhost:3000/api/user", {
                    firstName, 
                    lastName, 
                    email,
                    password,
                });
                router.push('/');   // navigate to landing page i.e '/' route
              }}>Sign up</button>

              {/* // this button uses server action */}
              <button className="my-2 bg-black text-white text-sm px-4 py-2 rounded-md" onClick={async () => {
                await signup(firstName, lastName, email, password);
                router.push('/');   // navigate to landing page i.e '/' route
              }}>Sign up II</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  interface InputBoxType {
    label: string;
    placeholder: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }
  
  function InputBox({label, placeholder, type, onChange}:InputBoxType) {
    return (
      <div className="flex flex-col mb-3">
        <label className="text-sm font-semibold ml-1 mb-1">{label}</label>
        <input className="border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
          type={type || "text"} placeholder={placeholder} required 
          onChange={onChange}/>
      </div>
    )
  }