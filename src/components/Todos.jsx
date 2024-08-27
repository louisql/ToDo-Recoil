import { useRecoilState } from "recoil";
import todoState from "../state/atoms/TodoState";
import { useState } from "react";

export default function Todos() {
    const [todos, setTodos] = useRecoilState(todoState);
    const [inputText, setInputText] = useState(""); 

    const addToDo = () => {
        setTodos((prevToDos) => [...prevToDos, {id: Math.random(), text: inputText }])
        setInputText('');
    }

    const clearToDos = () => {
        setTodos([]);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    return (
      <main>
          <input value={inputText} onChange={handleInputChange} type="text" id="todoInput" />
          <button onClick={addToDo}>Add Todo</button>
          <button onClick={clearToDos}>Clear Todos</button>



      </main>
    );
  }