import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  console.log(props.img);
  return (
    <>
  <div className="book-list">
  <ul>

 <li>
  <img src={props.img}/>
  <h2>{props.title}</h2>
 </li>

 </ul>
  </div>
   
    </>
  )
}

export default ItemListContainer