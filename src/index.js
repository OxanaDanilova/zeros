module.exports = function zeros(expression) {
  let num;
  let fact = 1n;
  let result = [];
  let counter = 0;

  function factorial(num,fact){
    for (let j=1n;j<=num; j++) {
      fact = fact*j;
    }
    result.push(BigInt(fact));
    fact=1n;
  }

  function factorialChetnue(num,fact){
    for (let j=2n;j<=num; j+=2n) {
      fact = fact*j;
    }
    result.push(BigInt(fact));
    fact=1n;
  }

  function factorialNeChetnue(num,fact){
    for (let j=1n;j<=num; j+=2n) {
      fact = fact*j;
    }
    result.push(BigInt(fact));
    fact=1n;
  }

  function nullZahlen(res){
    let arr = (String(res).split('')).reverse();


    for (let i=0;i<arr.length; i++) {
      if (arr[i]==='0') {counter+=1;} else {break;}
    }

  }
  // your solution
  let str = String(expression).split('');
  for (let i=0; i<str.length; i++) {
      if (str[i]== '!' ) {
      if (str[i+1] && str[i+1]=='!') {
        num = Number(str.splice(0,i).join(''));
        i=0;
        str.splice(0,2);
        if (str[0]== '*' ){str.splice(0,1);};
        if (num%2==0) {factorialChetnue(num,fact);}
        if (num%2!==0) {factorialNeChetnue(num, fact);}
        } else {
          num = Number(str.splice(0,i).join(''));
          i=0;
          str.splice(0,1);
          if (str[0]== '*' ){str.splice(0,1);};
          factorial(num,fact);
        }
      }

  }

  let res = BigInt(result.reduce((i, num)=> i*num ));
  nullZahlen(res);

  return counter;



}
