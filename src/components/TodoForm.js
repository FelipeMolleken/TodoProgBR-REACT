import React, { useState } from "react";

function TodoForm(props) {
    const [text, setText] = useState("");

    function adicionar(event) {
        event.preventDefault();
        if (text) {
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }
    }
    function mudar(event) {
        let texto = event.target.value
        setText(texto)
    }
    return (
        <form>
            <input onChange={mudar} type="text" value={text}></input>
            <button onClick={adicionar}>Add</button>
        </form>)
}

export default TodoForm;