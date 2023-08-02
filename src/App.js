import "./styles.css";

export default function App() {
  function SubArrayMaxSum(arr) {
    let sumaTot = 0;

    for (let i = 0; i < arr.length - 3; i++) {
      let suma = 0;
      for (let j = i; j < i + 4; j++) {
        suma += arr[j];
      }
      if (sumaTot < suma) sumaTot = suma;
    }
  }

  function SubArrayMaxSum2(arr) {
    let sumaTot = 0;
    let len = arr.length;
    let recorrido = 1;

    while (len >= 2) {
      //6
      for (let i = 0; i < recorrido; i++) {
        //1
        let suma = 0;
        for (let j = i; j < len; j++) {
          suma += arr[j];
        }
        if (sumaTot < suma) sumaTot = suma;
      }
      len--;
      recorrido++;
      console.log(sumaTot);
    }
    return sumaTot;
  }

  function maxSubArray(nums) {
    if (nums.length < 1) {
      return 0;
    } else {
      console.log(nums);
      let maxCurrent = nums[0];
      let maxGlobal = nums[0];
      for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
        }
      }
      return maxGlobal;
    }
  }

  var maxSubArray = function (nums) {
    //it works
    let negatives = 1;
    if (nums.length < 1) return 0;
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < 0) negatives++;
      if (nums[i - 1] > 0) {
        nums[i] += nums[i - 1];
      }
      max = Math.max(nums[i], max);
    }
    if (nums.length === negatives && nums[0] < 0) return 0;
    else return max;
  };

  //const a = SubArrayMaxSum2([-23,-15,-37,-47,-24,45,42,5,-48,-28,25,-19,6,-14,-24,-7,-4,18,14,15,5,7,-7]);
  //const a = SubArrayMaxSum2([-89,2, 1, -3, 4,8]);
  const a = maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4]);
  console.log(a);
  //[-23,-15,-37,-47,-24,45,42,5,-48,-28,25,-19,6,-14,-24,-7,-4,18,14,15,5,7,-7]

  return (
    <div className="App">
      <input />
    </div>
  );
}
