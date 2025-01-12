export default function Signup() {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="w-96 flex flex-col bg-slate-100 rounded-lg py-2 px-5">
          <div className="text-3xl text-center font-extrabold mb-4">
            Sign up
          </div>
          <InputBox label={"First Name"} placeholder={"John"} type={"text"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"} />
          <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} type={"text"} />
          <InputBox label={"Password"} placeholder={"minimum 8 digit"} type={"text"} />
          <div className="flex justify-center items-center">
            <button className="my-2 bg-black text-white text-sm px-2 py-1 rounded-md">Sign up</button>
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
}

function InputBox({label, placeholder, type}:InputBoxType) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm font-semibold ml-1 mb-1">{label}</label>
      <input className="border border-slate-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
        type={type || "text"} placeholder={placeholder} required />
    </div>
  )
}