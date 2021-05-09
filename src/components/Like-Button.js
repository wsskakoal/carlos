
import React from 'react';
import {Botao} from './Button';

export const LikeButton = () => (
    <Botao handleClick={()=> {alert('Liked')}}>Curtir</Botao>
);
