import React, { useState, useEffect } from 'react';
import CharacterDetails from '../components/CharacterDetails';
import CharacterSelector from '../components/CharacterSelector';
import CharacterFavouritesList from '../components/CharacterFavouritesList';
import CharacterListItem from '../components/CharacterListItem';

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => {
        fetch("http://hp-api.herokuapp.com/api/characters/students")
            .then(res => res.json())
            .then(data => setCharacters(data))

    };

    const onCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    const handleFavouriteSelection = () => {
        const copyFavouriteSelection = [...favouriteCharacters];
        copyFavouriteSelection.push(selectedCharacter);
        setFavouriteCharacters(copyFavouriteSelection);
    }

    return (
        <>
            <CharacterSelector allCharacters={characters} onCharacterSelect={onCharacterSelect} />
            {selectedCharacter ? <CharacterDetails characters={selectedCharacter} handleFavouriteSelection={handleFavouriteSelection} /> : null}
            <CharacterFavouritesList favouriteCharacters={favouriteCharacters} />
        </>

    );

};

export default CharacterContainer;