import React,{useState} from 'react'

export default function Forms() {
    const [name, setName] = useState({fName : '', lName:''})
    function handleSubmit(e){
        e.preventDefault();
        console.log(name.fName)
    }
  return (
    <form>
        <label>First Name</label>
      <input type='text' onChange={(e)=>setName({...name, fName:e.target.value})} value={name.fName} />
      <label>Last Name</label>
      <input type='text' onChange={(e)=>setName({...name, lName:e.target.value})} value={name.lName} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
