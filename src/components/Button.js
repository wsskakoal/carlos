import React from 'react';
import './Button';

export const Botao = ({children, handleClick }) => {
	return (
		<button className="main-button" onClick={handleClick}> 
			{children}
		</button>
	)
};