import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharContainer = styled.div`
font-family: 'arial';
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        
        .then (response => {
            const newCharacter = response.data.results;
            setCharacters(newCharacter);
            console.log(newCharacter);
        })
        .catch(error => {
            console.log('error', error);
        })
    },[]);

    return (
        <CharContainer>            
            {characters.map((character, index) => {
                return <CharacterCard key={index} name={character.name} gender={character.gender} height={character.height} eye_color={character.eye_color} birth_year={character.birth_year} />;
                })
            }
        </CharContainer>
    )
}
export default CharacterList;