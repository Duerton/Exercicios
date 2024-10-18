import { useState } from 'react';

export const changeToBinary = (number) => {
    const newNumber = Math.trunc(number / 2);
    const resto = number % 2;
    const result = [];
    let groupResult = [];
    result.push(resto);
    if ( number === 1 || number === 0 ){
        return result;
    } else {
        const j = changeToBinary(newNumber);
        groupResult = result.concat(j);
    };
    
    return Number(groupResult.reverse().join(""));
}

export const Ex1 = () => {

    const [value, setValue] = useState();
    const [result, setResult] = useState();

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const Ex1 = () => {
        const r = changeToBinary(value);
        console.log(r)
        setResult(r);
    }

    return (
        <>
          <input type="number" onChange={handleChange}></input>
          <button onClick={Ex1}>Calcula</button>
          <p>Valor em binário é: {result}</p>
        </>
      )

}

