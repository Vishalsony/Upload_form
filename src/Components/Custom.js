import React from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './Custom.css'

const Custom = () => {
   const countries = [
    {value:"Flour" ,label:"Flour"},
    {value:"Sugar" ,label:"Sugar"},
    {value:"Baking Powder" ,label:"Baking Powder"},
    {value:"Salt" ,label:"Salt"},
    {value:"Egg" ,label:"Egg"},
    {value:"Butter Milk" ,label:"Butter Milk"},
    {value:"Vegitable Oil" ,label:"Vegitable Oil"},
    {value:"Butter" ,label:"Butter"},
    
   ]
  return (
    <Multiselect
    options={countries} 
    // placeholder={<i class="bi bi-arrow-left text-danger"></i>}// Options to display in the dropdown
  // Preselected value to persist in dropdown
    onSelect={(e)=>console.log(e)} // Function will trigger on select event
    onRemove={(e)=>console.log(e)} // Function will trigger on remove event
    displayValue="label" 
    className='f inputs' // Property name to display in the dropdown options
    />
  )
}

export default Custom
