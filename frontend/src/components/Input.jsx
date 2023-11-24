import React from 'react'

export default function Input(props) {
    const { onChange } = props;
  return (
    <div>
      <label htmlFor={props.for} className="block text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div> */}
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
