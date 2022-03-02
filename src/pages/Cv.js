import React, { Component } from "react";
import Educations from "./cv_educations.json";
import Employments from "./cv_employments.json";

const Cv = () => {

  return (

    <div>

      <h1>Mitt Cv</h1>
      <h2>Utbildningar</h2>
      <ul>

        {Educations.map((record, i) => (

          <li key={i}>

            <li>{record.namn}</li>

            <ul>

              <li key={record.School}>{record.School}</li>

              <li key={record.Education}>{record.Education}</li>

              <li key={record.Dates}>{record.Dates}</li>

            </ul>

          </li>

        ))}

      </ul>
      <h2>Anställningar</h2>
      <ul>

        {Employments.map((record, i) => (

          <li key={i}>

            <li>{record.namn}</li>

            <ul>

              <li key={record.Company}>{record.Company}</li>

              <li key={record.Employment}>{record.Employment}</li>

              <li key={record.Dates}>{record.Dates}</li>

            </ul>

          </li>

        ))}

      </ul>

    </div>

  );

};

export default Cv;