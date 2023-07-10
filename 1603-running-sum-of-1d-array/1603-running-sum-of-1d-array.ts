function runningSum(nums: number[]): number[] {
    let array: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let temp: number = 0;
        let j: number = 0;

        while (j <= i) {
            temp += nums[j]
            j++;
        }

        array.push(temp)
    }

    return array;
};