function maximumWealth(accounts: number[][]): number {
    let max: number = 0;

    for (let i = 0; i < accounts.length; i++) {
        let temp: number = 0

        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j]
            if(temp >= max) { max = temp}
        }
    }
    return max;
};