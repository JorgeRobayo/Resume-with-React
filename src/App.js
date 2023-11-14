import './App.css';
import { useState } from 'react';
import myInfo from './models/profile';
import image from './models/image';


function App() {
  let [data, setData] = useState(myInfo)
  let [age, setAge] = useState(25)
  let [pic, setPic] = useState(image)

  function add(){
    setAge(age+=1)
  }

  return (
    <div className="App" style = {{backgroundColor: "lightblue"}} >

      <h1>{data.name}</h1>

      {/* <img src = {image}>{image}</img> */}

      {/* using .map will display the array in different lines */}
      {data.jobExp.map((job)=>{
      return <h2 style={{backgroundColor: "lightgreen"}}>Job: {job}</h2>})}

      {/* using .map will display the array in different lines */}
      {data.languages.map((lenguage)=>{
        return <h2 style={{backgroundColor: "lightpink"}}>Lenguages: {lenguage}</h2>
      })}

      {/* using .map will display the array in different lines */}
      {data.education.map((edu)=>{
        return <h2 style={{backgroundColor: "lightyellow"}}>Education: {edu}</h2>
      })}

      <h2 style = {{backgroundColor: "magenta"}}>Address: {myInfo.address}</h2>

      <h1>Age: {age}</h1>

      <button onClick={add}>click to make me older</button>

      <h1>Contact: {myInfo.contact}</h1>
      
      

    </div>
  );
}

export default App;
