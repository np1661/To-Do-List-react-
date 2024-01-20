import React, {useState} from 'react';
import "./inputArea.css";

const InputArea = (props) => {
    const[inputText, setInputText] = useState("");

    const handleChange = (event) =>{
        setInputText(event.target.value);
    }
    

  return (
    <div className="form__container">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={()=>{
            props.addItems(inputText);
            setInputText("");
        }}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default InputArea
