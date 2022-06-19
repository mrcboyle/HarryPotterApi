import React from 'react';
import CharacterListItem from './CharacterListItem';

const CharacterFavouritesList = ({ favouriteCharacters }) => {

    const favouriteItems = favouriteCharacters.map((characters, index) => {
        return <CharacterListItem characters={characters} key={index} />
    });

    return (
        <>
            <h4>My Favourite Wizards</h4>
            <ul>
                {favouriteItems}
            </ul>

        </>

    );

};

export default CharacterFavouritesList;