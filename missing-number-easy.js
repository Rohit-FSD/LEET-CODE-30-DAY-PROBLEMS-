function missingNumber(nums) {
     let number = null;
     nums.sort((a, b) => a - b);
     for (let i = 0; i < nums.length; i++) {
          if ((nums.length === 1 || nums[i + 1] - nums[i] !== 1) && nums[0] === 0) {
               number = nums[i] + 1;
               break;
          } else if (nums.length === 1 && nums[0] !== 0) {
               number = nums[i] - 1;
               break;
          } else if (!(nums.length === 1 && nums[0] !== 0) && nums.length === 1 && nums[0] === 0) {
               number = nums[0] - 1;
               break;
          }
     }
     return number;
}
