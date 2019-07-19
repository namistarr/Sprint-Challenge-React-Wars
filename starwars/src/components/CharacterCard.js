import React from "react";
import styled from 'styled-components';


function CharacterCard({name, gender, height, eye_color, birth_year}) {
   return(
   <div className='character-card'>
   <img className='character-pic' />
   <div className='character-description'>
       <h2>Name: {name}</h2>
       <p>Gender: {gender}</p>
       <p>Height: {height}</p>
       <p>Eye Color: {eye_color}</p>
       <p>Birth Year: {birth_year}</p>


    </div>
  </div>
) 
    
}
export default CharacterCard;