const babel = require('@babel/core');   // @babel/core는 라이브러리
const result = babel.transform("const fn = () => 1;", {});  // 1을 리턴하는 람다함수 , {} 는 규칙이 없다는 것

console.log(result);