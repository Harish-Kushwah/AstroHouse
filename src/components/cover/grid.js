function generateLoshuGrid(dob, gender) {
    class MyNumber {
        constructor(row, col) {
            this.row = row;
            this.col = col;
        }
    }

    const hash = Array(10).fill(0);

    function digitSum(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    function countDigit(num) {
        let count = 0;
        while (num > 0) {
            count++;
            num = Math.floor(num / 10);
        }
        return count;
    }

    function fillGridWithDigits(grid, digit, map) {
        while (digit > 0) {
            const d = digit % 10;
            if (d !== 0) {
                const { row, col } = map.get(d);
                grid[row][col][0] = d; // Set the Mynumber in the grid
                hash[d]++;
                grid[row][col][1] = hash[d]; // Update the frequency in the grid
            }
            digit = Math.floor(digit / 10);
        }
    }

    function getSingleDigitSum(digit) {
        while (digit !== 0 && countDigit(digit) !== 1) {
            digit = digitSum(digit);
        }
        return digit;
    }

    function fillGridWithSingleDigits(grid, digit, map) {
        digit = getSingleDigitSum(digit);

        while (digit > 0) {
            const d = digit % 10;
            if (d !== 0) {
                const { row, col } = map.get(d);
                grid[row][col][0] = d; // Set the Mynumber in the grid
                hash[d]++;
                grid[row][col][1] = hash[d]; // Update the frequency in the grid
            }
            digit = Math.floor(digit / 10);
        }
    }

    const standard = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ];
    function getMissingNumber(grid) {
        let missing = [];
        for (let i in grid) {
            for (let j in grid[i]) {
                if (grid[i][j][0] == 0) {
                    missing.push(standard[i][j]);
                }
            }
        }
        return missing;
    }

    function generateMetaInfo(grid){
        return {
            isGoldenYog : grid[0][0][0]!==0 && grid[1][1][0]!==0 && grid[2][2][0]!==0,
            isSilverYog :grid[0][2][0]!==0 && grid[1][1][0]!==0 && grid[2][0][0]!==0,
         
            isMentalPlane :grid[0][0][0]!==0 && grid[0][1][0]!==0 && grid[0][2][0]!==0,
            isEmotionalPlane :grid[1][0][0]!==0 && grid[1][1][0]!==0 && grid[1][2][0]!==0,
            isPracticalPlane :grid[2][0][0]!==0 && grid[2][1][0]!==0 && grid[2][2][0]!==0,
          
            isThoughtPlane :grid[0][0][0]!==0 && grid[1][0][0]!==0 && grid[2][0][0]!==0,
            isWillPlane :grid[0][1][0]!==0 && grid[1][1][0]!==0 && grid[2][1][0]!==0,
            isActionPlane :grid[0][2][0]!==0 && grid[1][2][0]!==0 && grid[2][2][0]!==0,
        }
    }

    const map = new Map();
    map.set(1, new MyNumber(2, 1));
    map.set(2, new MyNumber(0, 2));
    map.set(3, new MyNumber(1, 0));
    map.set(4, new MyNumber(0, 0));
    map.set(5, new MyNumber(1, 1));
    map.set(6, new MyNumber(2, 2));
    map.set(7, new MyNumber(1, 2));
    map.set(8, new MyNumber(2, 0));
    map.set(9, new MyNumber(0, 1));


    const [year, month, day] = dob.split("-").map(Number);
    // const zeroBasedMonth = month - 1; // Adjust month to zero-based if needed


    const grid = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => [0, 0])); // Initialize grid with [Mynumber, freq]

    fillGridWithDigits(grid, day, map);
    fillGridWithDigits(grid, month, map);
    fillGridWithDigits(grid, year, map);

    const daySum = digitSum(day);
    const monthSum = digitSum(month);
    const yearSum = digitSum(year);
   
    

    // Mul aank
    fillGridWithSingleDigits(grid, daySum, map);

    // Lucky Mynumber
    const totalSum = digitSum(daySum + monthSum + yearSum);
    fillGridWithSingleDigits(grid, totalSum, map);

    // driver number 
    const driverNumber = daySum;
    const destinyNumber = totalSum;
    let kuaNumber = 0;
    // Kua Mynumber
    if (gender === 'M') {
        kuaNumber = 11 - getSingleDigitSum(year);
        fillGridWithSingleDigits(grid,kuaNumber , map);
    } else {
        kuaNumber = getSingleDigitSum(year) + 4;
        fillGridWithSingleDigits(grid, kuaNumber, map);
    }



    return {
            driverNumber,
            destinyNumber,
            kuaNumber,
            getMissingNumber:getMissingNumber(grid),
            getMeatInfo:generateMetaInfo(grid),
            grid:grid,
    };
}

export default generateLoshuGrid;