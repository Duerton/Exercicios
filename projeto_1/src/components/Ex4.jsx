import { useState } from "react";


export const Ex4 = () => {

    const [isTriangle, setIsTriangle] = useState();

    // const array = [10, 50 ,5 ,1]
    const array = [2147483648, 10, 2, 5, 1, 8, 20,-2147483648]

    const compareTri = (a, b, c) => {
        let isTriangle;
        (a + b > c && a + c > b && b + c > a) ? isTriangle = true : isTriangle = false
        return isTriangle;
    }
    
    const calcTriangle = (array) => {
        array.sort((a, b) => a - b)
        for (let index = 2; index < array.length; index++) {
            console.log(array[index])
            const elem1 = array[index];
            const elem2 = array[index-1];
            const elem3 = array[index-2];
            const isTriangle = compareTri(elem1, elem2, elem3);
            if (isTriangle){
                return 1
            }
        }
        console.log(array);
        return 0;
    }

    const handleCalc = () => {
        setIsTriangle(calcTriangle(array));
    }
    
    return (
        <>
            <button onClick={handleCalc}>Calcular</button>
            <p>{isTriangle}</p>
        </>
    )
}