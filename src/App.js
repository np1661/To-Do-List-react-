import './App.css';
import ToDoitems from './component/ToDoitems';
import InputArea from "./component/inputArea";
import { useState } from 'react';


function App() {
  const [items, setItems]= useState([]);

  const addItems = (inputText) =>{
    setItems((prevItems)=>{
      return [...prevItems, inputText]
    });
  }

  const deleteItem = (id) =>{
    setItems((prevItems)=>{
      return prevItems.filter((item, index)=>{
        return index !== id;
      })
    })
  }


  return (
    <div className="box__container">
      <div className="box__heading">
        <h1>To-Do-List</h1>
      </div>
      <InputArea addItems ={addItems} />
      <div>
        <ul>
          {
            items.map((item,index)=>{
              return <ToDoitems key={index} text={item} deleteItem={deleteItem} id={index} />
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
