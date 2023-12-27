import React from 'react'

function InputControl(props) {
  return (
    <div className="container flex flex-col gap-2 mb-4">
      {props.label && <label className="font-bold text-base text-gray-700">{props.label}</label>}
      <input 
      className="bg-white border rounded-md border-gray-300 outline-none px-4 py-2 text-black transition duration-300 focus:border-purple-600 hover:border-gray-400" 
      type="text" {...props} />
    </div>
  )
}

export default InputControl