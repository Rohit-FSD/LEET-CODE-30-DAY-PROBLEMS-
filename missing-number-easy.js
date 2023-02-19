function missingNumber(nums) {
     let number = null;
     let arrayLenght = nums.length;
     nums.sort((a, b) => a - b);
     for (let i = 0; i < arrayLenght; i++) {
          if ((arrayLenght === 1 || nums[i + 1] - nums[i] !== 1) && nums[0] === 0) {
               number = nums[i] + 1;
               break;
          } else if (arrayLenght === 1 && nums[0] !== 0) {
               number = nums[i] - 1;
               break;
          } else {
               number = nums[0] - 1;
          }
     }
     return number;
}
