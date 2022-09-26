
  // let totalSeconds = 0;
  // function countTimer() {
  //   ++totalSeconds;
  //   let hour = Math.floor(totalSeconds / 3600);
  //   let minute = Math.floor((totalSeconds - (hour * 3600)) / 60);
  //   let seconds = totalSeconds - ((hour * 3600) + minute * 60);
  //   if (hour < 10) hour = '0' + hour;
  //   if (minute < 10) minute = '0' + minute;
  //   if (seconds < 10) seconds = '0' + seconds;
  //   console.log(hour + ':' + minute + ':' + seconds);
  // }

  // setInterval(countTimer, 1000);


  function sumArray (array) {
    const sum = array.reduce((s,v)=> s+=v, 0);

    const result = array.map(v=> sum - v);

    return result;
  }

  const a = [1,2,3,4,5,6,7,8,9,10];
  console.log(sumArray(a));


  function aa (arr) {
    const sum = [];
    for(let i = 0; i<arr.length; i++) {
      const newArr =[...arr]
      newArr.splice(i,1)
      sum[i] = newArr.reduce((s,v)=>s+v,0)
    }
    return sum
  }

  console.log(aa(a))