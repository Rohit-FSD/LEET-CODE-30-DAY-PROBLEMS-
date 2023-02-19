var majorityElement = function (nums) {
     let countOfCurrentVariable = (countOfPreviousVariable = 0);
     let majorElement = null;
     nums.sort((a, b) => a - b);
     for (let i = 0; i < nums.length; i++) {
          if (nums.length === 1) {
               majorElement = nums[i];
               break;
          } else if (nums[i] === nums[i + 1]) countOfCurrentVariable++;
          else {
               if (countOfCurrentVariable > countOfPreviousVariable) {
                    countOfPreviousVariable = countOfCurrentVariable;
                    countOfCurrentVariable = 0;
                    majorElement = nums[i];
               }
          }
     }
     return majorElement;
};
