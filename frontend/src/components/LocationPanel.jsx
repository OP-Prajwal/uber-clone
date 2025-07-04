import React from 'react'

const LocationPanel = ({suggestions,setvehiclePanel,setpanelopen,setpickup,setdestination,setactivefield,activefield}) => {

const handleSuggestionClick=(suggestion)=>{
if(activefield==='pickup'){
  setpickup(suggestion.description) //Access description here
}
else if(activefield==='destination'){
  setdestination(suggestion.description) //and here
}



}




  return (


  
    <div className='m-4 gap-1 justify-center flex flex-col'>
{
(suggestions || []).map((elem,id)=>( 
       <div
          key={id}
        onClick={()=>
           handleSuggestionClick(elem) //Call as a function
        }
       className='flex items-center  border-2 border-white active:border-gray-400 rounded-xl active:border-gray-400justify-start p-2 my-4 '>

       <h4
       className='text-1xl font-medium'>{elem.description} </h4>
     </div>
))
  }

    </div>
  )
}

export default LocationPanel

