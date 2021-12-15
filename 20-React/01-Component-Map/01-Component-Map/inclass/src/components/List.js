import React from 'react';

function List({groceries}) {
  return (
    <ul className="list-group">
       {groceries.map(food => {
         return <li key={food.id}>{food.name}</li>
       })}  
    </ul>
  );
}

export default List;
