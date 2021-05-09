
import React from 'react';
import {Botao} from './Button';

 const SearchButton = () => (
    <Botao handleClick={()=> {alert('Search')}}>Procurar</Botao>
);
export default SearchButton;