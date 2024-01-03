import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
  const [query,setQuery] = useState("")
  const navigate = useNavigate()
 
  function handleSubmit(e){
    e.preventDefault()
    if(!query) return 
    navigate(`/order/${query}`)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      className='rounded-full px-4 py-2 bg-yellow-100
      text-sm placeholder:text-stone-400 w-28 sm:w-64
      md:focus:w-72 transition-all duration-300
      focus:outline-none focus:ring
      focus:ring-yellow-400 focus:ring-opacity-50
      ' 
      placeholder='Search order #' 
      type="text"
      value={query}
      onChange={(e)=>setQuery(e.target.value)} 
      />
    </form>
  )
}
