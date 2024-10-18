



export const Ex2 = () => {

    const entryArray = [1,2,3,4,5,6,7];
    const n = 3;

    const turnArray = (array, number) => {
        const newArray = [...array];
        let turns = number
        if ( number >= array.length) {
            turns = number % array.length
        }
        array.forEach((element, index) => {
            let jump = (index + 1) + (turns)
            if (jump > array.length){
                jump -= array.length
            }
            newArray.splice(jump, 1, element);
        });

        newArray.splice(0, 1);
        return newArray;
    }

    const handleCalc = () => {
        const result = turnArray(entryArray,n);
        console.log(result);
    }

    return (
        <>
            <button onClick={handleCalc}>Virar Array</button>
        </>
    )
}