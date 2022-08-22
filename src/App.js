import React, { useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import axios from "axios";

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
      <h1>Total Samples Tested: {gendata.totalSamplesTested}</h1>
      <h2>Total Confirmed Cases: {gendata.totalConfirmedCases}</h2>
      <h3>Total Active Cases: {gendata.totalActiveCases}</h3>
      <p>Discharged: {gendata.discharged}</p>
      <p>Death: {gendata.death}</p>
      
      {
       data.map((item)=>{
        return <div key={item._id}>
          <h1>State: {item.state}</h1>
          <p>Confirmed Cases: {item.confirmedCases}</p>
          <p>Deaths: {item.deaths}</p>
          <p>Cases On Admission: {item.casesOnAdmission}</p>
          <p>Discharged: {item.discharged}</p>
          </div>
       })
      }
    </div>
  );
}

export default App;
