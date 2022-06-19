import React from 'react';

const CharacterListItem = ({ characters }) => {

    return (
        <>
            <li>{characters.name} | {characters.house}</li>

        </>
    )
}

export default CharacterListItem;