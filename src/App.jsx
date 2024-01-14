import React, { useState,useCallback,useEffect } from 'react'

function App() {
  
  const [length,setLength]=useState(8);
  const [Numbers,setNumber]=useState(true);
  const [Characters,setCharacters]=useState(false);
  const [Password,setPassword]=useState("");
  const passwordGen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijhlmnopqrustuvwxyz";
    // Number
    if (Numbers===true){
      str+="0123456789";
    }
    //Character
    if(Characters===true){str+="!@#$%^&*()";}
    //Generate 
    for (let i =1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length + 1);
      pass+=str.charAt(char);
    }
    setPassword(pass);

  },[length,Numbers,Characters,setPassword])
useEffect(() => {
    passwordGen();
  }, [passwordGen]);





  return (
<div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg px-8 py-6 mt-10">
  <h1 className="text-3xl font-bold text-gray-700 mb-6">Password Generator</h1>
  <div className="flex items-center mb-4">
    <input
      type="text"
      value={Password}
      className="flex-1 py-2 px-4 rounded-md bg-gray-200 text-gray-700 font-medium"
      placeholder="Enter your password"
      readOnly
    />
    <button className="ml-4 px-6 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600" onClick={passwordGen}>
      Generate
    </button>
  </div>
  <div className="mt-8">
  <div className="flex items-center mb-4">
    <input
      type="range"
      min={8}
      max={100}
      value={length}
      className="cursor-pointer w-full"
      onChange={(e) => {
        setLength(e.target.value);
        passwordGen();
      }}
    />
    <label className="ml-4 text-l text-gray-700">{length}</label>
  </div>
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      defaultChecked={Numbers}
      id="numberInput"
      className="mr-2 cursor-pointer"
      onChange={() => {
        setNumber((prev) => !prev);
        passwordGen();
      }}
    />
    <label htmlFor="numberInput" className="text-gray-700">
      Numbers
    </label>
  </div>
  <div className="flex items-center">
    <input
      type="checkbox"
      defaultChecked={Characters}
      id="characterInput"
      className="mr-2 cursor-pointer"
      onChange={() => {
        setCharacters((prev) => !prev);
        passwordGen();
      }}
    />
    <label htmlFor="characterInput" className="text-gray-700">
      Characters
    </label>
  </div>
</div>
</div>
  )
}

export default App