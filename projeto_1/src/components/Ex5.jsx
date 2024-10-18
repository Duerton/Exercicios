
export const Ex5 = () => {

    const nums = [2,7,11,15];
    const target = 9;

    var twoSum = function(nums, target) {
        let aux = {};
        for (let i=0; i < (nums.length); i++){
            const num = nums[i];
            const x = target - num;
            if (x in aux) {
                console.log([i, parseInt(aux[x])])
                return [i, parseInt(aux[x])];
            }
            aux[num] = i;
        }

        return null;
    };

    const handleCompare = () => {
        twoSum(nums, target);
    }

    return (
        <button onClick={handleCompare}>Verificar</button>
    )

}
