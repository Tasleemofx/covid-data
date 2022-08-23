import React from 'react'
import "../table.css"

const Tabledata = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <td>State</td>
          <td>Confirmed Cases</td>
          <td>Deaths</td>
          <td>Cases On Admission</td>
          <td>Discharged</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td> {item.state}</td>
              <td> {item.confirmedCases}</td>
              <td>{item.death}</td>
              <td> {item.casesOnAdmission}</td>
              <td> {item.discharged}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tabledata