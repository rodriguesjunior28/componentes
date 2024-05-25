import React from 'react';

export const TabButton = ({children,isSelected,onSelected}) => {
  return (               //children - é pra deixar voce trabalhar como se fosse assim <TabButton></TabButton>
    <li>
        <button    //Aqui é o ternário
        className={isSelected ? 'active' : undefined}
        onClick={onSelected}
        >
            {children} 
        </button>
    </li>
  )
}
