function solution(nums) {

    if ((Array.isArray(nums) && nums.length === 0) || (nums === null)) {
        return [];
    } else {
        const numbers = nums;
        for (var j = 0; j < numbers.length; j++) {

            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] > numbers[i + 1]) {
                    numbers[i] = numbers[i] + numbers[i + 1];
                    numbers[i + 1] = numbers[i] - numbers[i + 1];
                    numbers[i] = numbers[i] - numbers[i + 1];
                }
            }
        }
        return numbers;
    }

}
