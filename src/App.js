import React, { useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import axios from "axios";

function App() {
  const [data, setData]= useState([])
  useEffect(()=>{
      axios.get("https://covidnigeria.herokuapp.com/api")
      .then(response=> setData(response.data))    
  },[])
  const count = useSelector((state)=> state.data)

  return (
    <div className="App">   
      {
        data.map((item)=>{
        console.log(item)
        return <h1>Hello</h1>
        })
      }
    </div>
  );
}

export default App;
