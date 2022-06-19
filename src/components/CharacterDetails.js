import React from 'react';


const CharacterDetails = ({ characters, handleFavouriteSelection }) => {

    return (
        <>
            <h2>{characters.name}</h2>
            <p>House: {characters.house}</p>
            <p>Ancestry: {characters.ancestry}</p>
            <p>Wand: {characters.wand.wood} wood | {characters.wand.core} core | {characters.wand.length} inches </p>
            <p>Patronus: {characters.patronus}</p>
            <img src={characters.image} alt={characters.name} />
            <p onClick={handleFavouriteSelection}>Click <b><i>Here</i></b> to add {characters.name} to your favourite Wizards List</p>
        </>

    );

};

export default CharacterDetails;