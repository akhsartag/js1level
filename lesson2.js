// 3 задание

let a = 4, b = 7;

function c(x, y) {
  if (x >= 0 && y >= 0) {
    return x - y;
  } else
  if (x < 0 && y < 0) {
    return x * y
  } else {
    return x - y
  }
}

//4 задание

a = 6;
switch (a) {
  case 1: 
    console.log(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
  case 2: 
    console.log(2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
  case 3: 
    console.log(3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
  case 4: 
    console.log(4,5,6,7,8,9,10,11,12,13,14,15);
    break;
  case 5: 
    console.log(5,6,7,8,9,10,11,12,13,14,15);
    break;
  case 6: 
    console.log(6,7,8,9,10,11,12,13,14,15);
    break;
  case 7: 
    console.log(7,8,9,10,11,12,13,14,15);
    break;
  case 8: 
    console.log(8,9,10,11,12,13,14,15);
    break;
  case 9: 
    console.log(9,10,11,12,13,14,15);
    break;
  case 10: 
    console.log(10,11,12,13,14,15);
    break;
  case 11: 
    console.log(11,12,13,14,15);
    break;
  case 12: 
    console.log(12,13,14,15);
    break;
  case 13: 
    console.log(13,14,15);
    break;
  case 14: 
    console.log(14,15);
    break;
  case 15: 
    console.log(15);
    break;
  default: 
  console.log('out of range');
    break;
}

//5 задание

function sum(a, b) {
  return a + b
}

function dif(a, b) {
  return a - b
}

function mul(a, b) {
  return a * b
}

function div(a, b) {
  return a / b
}

//6 задание

function mathOperation(arg1, arg2, operation) {
  switch (operation){
    case 'sum':
      return arg1 + arg2;
      break;
    case 'dif':
      return arg1 - arg2;
      break;
    case 'mul':
      return arg1 * arg2;
      break;
    case 'div':
      return arg1 / arg2;
      break;
  }
}

//8 задание

function power(val, pow) {
  if (pow === 1) {
    return val
  }
  return val * power(val, pow-1)
}

console.log(power(2, 8))