//ListOfSyrups.js
import React from "react";
import Syrups from './syrup_data.json';

function list (title, objects) {
  var sentence;
  for (let i = 0; i < objects.length; i++) {
    sentence += <li> + objects[i] + </li>
  }
  return (sentence);
}

export function ListOfSyrups (props) {
  return (
    <ul>
    {list(props.title, Syrups)}
    </ul>
  )
}
