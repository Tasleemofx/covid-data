import React, { useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import axios from "axios";
import Tabledata from "./components/Tabledata";

function App() {
  const [data, setData]= useState([])
  const [gendata, setGendata] = useState([])
  useEffect(()=>{
      axios.get("https://covidnigeria.herokuapp.com/api")
      .then(response=>{
        setData(response.data.data.states)
        setGendata(response.data.data)
      })    
  },[])
  // totalSamplesTested: "5441,162",
  //   totalConfirmedCases: 262748,
  //     totalActiveCases: 3083,
  //       discharged: 256518,
  //         death: 3147,
  return (
    <div className="App">
      <h1>Nigeria's Covid-19 data</h1>
      <h3>Total Samples Tested: {gendata.totalSamplesTested}</h3>
      <h3>Total Confirmed Cases: {gendata.totalConfirmedCases}</h3>
      <h3>Total Active Cases: {gendata.totalActiveCases}</h3>
      <p>Discharged: {gendata.discharged}</p>
      <p>Death: {gendata.death}</p>
      
      <Tabledata data={data} />
    </div>
  );
}

export default App;
