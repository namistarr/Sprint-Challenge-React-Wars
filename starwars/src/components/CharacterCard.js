import React from "react";
import styled from 'styled-components';

const Card = styled.div`
width: 400px;
height: 300px;
background-color: white;
border-radius: 8px;
opacity: 0.75;
margin: 20px;
padding; 100px;
`
const Name = styled.h2`
font-size: 2rem;

`
const CharDescription = styled.p`
font-size: 20px;
padding: 5px;
margin: 5px;  
`

function CharacterCard({name, gender, height, eye_color, birth_year}) {
   return(
   <Card>
       <Name>Name: {name}</Name>
       <CharDescription>👦👧 Gender: {gender}</CharDescription>
       <CharDescription>📊 Height: {height}</CharDescription>
       <CharDescription>👁️ Eye Color: {eye_color}</CharDescription>
       <CharDescription>🎂 Birth Year: {birth_year}</CharDescription>
  </Card>
) 
    
}
export default CharacterCard;