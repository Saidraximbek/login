import React from 'react'

function InputArea() {
  return (
    <textarea className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm 
             transition-all duration-300 ease-in-out 
             transform focus:scale-105 focus:shadow-xl 
             focus:border-blue-500 focus:outline-none" placeholder='Tayyorlanish tartibini yozing...'></textarea>
  )
}

export default InputArea