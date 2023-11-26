import React, { useState } from "react";
function Form() {
    const [names,setName] = useState('fg');

    const InputChange = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    return(
        <>
            <h2>Hello{names}</h2>
            <input onChange={InputChange} type ="text" />
            <button>Click ME </button>
        </>
    )
}

export default Form;