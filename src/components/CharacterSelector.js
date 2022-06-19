import React from 'react';

const CharacterSelector = ({ allCharacters, onCharacterSelect }) => {

    const characterOptions = allCharacters.map((characters, index) => {
        return <option key={index} value={index}>{characters.name}</option>;
    });

    const handleChange = (event) => {
        const choseCharacter = allCharacters[event.target.value];
        onCharacterSelect(choseCharacter);
    };

    // how to return the drop-down list in alphabetical order?
    return (
        <>
            <select onChange={handleChange}>
                <option selected disabled value="">Choose a Wizarding World Character!</option>
                {characterOptions}
            </select>

        </>

    );

};

export default CharacterSelector;