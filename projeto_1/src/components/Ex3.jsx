import { useState } from "react";

export const Ex3 = () => {

    const [init, setInit] = useState();
    const [jump, setJump] = useState();
    const [distance, setDistance] = useState();
    const [result, setResult] = useState(0);

    const calcJump = (init, jump, distance) => {
        let totalJump = Math.trunc(distance / jump);
        const totalDistanceJump = ( totalJump * parseInt(jump) ) + parseInt(init)
        if ( totalDistanceJump < parseInt(distance)) {
            totalJump += 1;
        }
        setResult(totalJump);
    }

    const handleCalc = () => {
        calcJump(init, jump, distance)
    }

    const handleInit = (e) => {
        setInit(e.target.value);
    }

    const handleJump = (e) => {
        setJump(e.target.value);
    }

    const handleDistance = (e) => {
        setDistance(e.target.value);
    }

    return (
        <>
            <p>Inicio</p>
            <input type='number' onChange={handleInit}></input><br/>
            <p>Distancia pulo</p>
            <input type='number' onChange={handleJump}></input><br/>
            <p>Distancia Total</p>
            <input type='number' onChange={handleDistance}></input><br/>
            <button onClick={handleCalc}>Calcular</button>
            <p>{result}</p>
        </>
    )
}