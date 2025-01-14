import './App.css'
import Home from './Home'
const btn = {
  backgroundColor:"gray"
}
const one = {
  backgroundColor:"#FFFF92"
}
const two = {
  backgroundColor:"#FF92ff"
}
const Status = (prop) => {
  let status = prop.status ? `yes he can vote b/che is :  ${prop.age} years old ` : "no he can't vote ";
  
  return (
  <>
 <div style={prop.style}>

   <h1>{status}</h1>
   <ul>
    {prop.skill.map((skills)=> <li>{skills}</li> )}
   </ul>

   <h1>{prop.info.name}</h1>
   <h2>{prop.info.address}</h2>
   <h3>{prop.info.num}</h3>
   <button onClick={prop.onClick} style={btn}> {prop.text}</button>
   
 </div>
  </>
  )
}
function sayhi () {
  alert ("hello")
}
function App() {
  const now =new Date()
  const year = now.getFullYear()
  const birth_year =2003
  const age = year - birth_year
  const status = age>=18
  const info = {
    name : "fitsum",
    address : "addis",
    num : "0910...."
  }

  return (
    <>
      <Home  />
      <Status style= {one} status={status} age = {age} skill={["html", "css", "javscript",]} info = {info} text= "say hello " onClick={sayhi}/>
      <Status style= {two} status={status} age = {age} skill={["html", "css", "javscript",]} info = {info} text= " say hi " onClick={() => alert('Hi')}/>
      
    </>
  )
}

export default App
