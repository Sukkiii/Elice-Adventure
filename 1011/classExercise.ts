// let memo: string = 'echo';
// // text = 12345

// // let a : number;

// // a = 1;
// // a = 'b';

// const sumAB = (a: number, b: number) => {
//   return a + b;
// }

// sumAB(1, 2) // 3

// //

// // string
// // 문자열을 저장하는 타입
// let str: string = 'hi';

// // Boolean
// // 참/거짓을 저장하는 타입
// let isSucceeded: boolean = true;

// // number
// // 부동 소수 값을 저장하는 타입
// // 2진수, 8진수, 10진수, 16진수 사용 가능
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

// // null 값이 의도적으로 비어 있는 상태를 저장
// let n: null = null;

// // undefined 아무 값도 할당되지 않은 상태를 저장
// let u: undefined = undefined;

// //typeof로 데이터 타입을 확인
// typeof null // 'object'
// typeof undefined // 'undefined'

// null === undefined // false
// null == undefined // true
// null === null // true
// null == null // true
// !null //
// isNaN(1 + null) // false
// isNaN(1 + undefined) // true

// object
// 기본 자료형에 해당하지 않는 타입
// string, boolean, number, null, undefined를 제외한 타입
// function create(o: object): void{}

// create({ prop: 0 }) // 성공
// create([1, 2, 3]) // 성공
// create("string") // error
// create(false) // error
// create(42) // error
// create(null) // error
// create(undefined) // error

// // array
// // 배열을 저장하는 타입
// let arr: number[] = [1, 2, 3]

// // 아래와 같이 제네릭을 사용한 타입 표기 가능
// let arr2: Array<number> = [1, 2, 3]

// tuple
// 길이와 각 요소의 타입이 정해진 배열을 저장
// let arr: [string, number] = ['Hi', 6];

// arr[0].concat("!");

// arr[1].concat("!");
// //Error, 'number' does not have 'concat'

// // 정의하지 않은 index 호출 시 오류
// arr[3] = 'hello';
// //Error, Property '3' does not exist on type '[string, number]'

// // enum
// // 특정 값(상수)들의 집합을 저장하는 타입
// enum Car { BUS, TAXI, SUV };

// let bus: Car = Car.BUS;
// let bus: Car = Car[0]; // 인덱스 번호로 접근 가능

// // 인덱스를 사용자 편의로 변경
// enum Car { BUS = 1, TAXI = 2, SUV = 3};
// let taxi: String = Car[2]

// enum Car { BUS = 2, TAXI, SUV };
// let taxi: String = Car[3];

// // any
// // 모든 타입을 저장 가능
// // 컴파일 중 타입 검사를 하지 않음
// let str: any = 'hi';
// let num: any = 10;
// let arr: any = ['a', 2, true];

// // void
// // 보통 함수에서 반환 값이 없을 때, any의 반대 타입
// // 변수에는 Undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
// let unknown: void = undefined;

// function sayHi(): void {
//   console.log('hi');
// }

// never
// 발생할 수 없는 타입
// 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
// 종료되지 않는 함수
// function neverEnd(): never {
//   while(true) {}
// }

// // Error: A function returning 'never' cannot have a reachable end point.ts
// function neverEnd2(): never {
//   while(true) {
//     // break; // 이것 때문에 error 발생
//   }
// }

// // 항상 오류를 발생시키는 함수
// function error(message: string): never {
//   throw new Error(message);
// }

enum Car { BUS = 0, TAXI = 1, SUV = 2 };

// let bus: Car = Car[0];
// console.log(bus); // "BUS" 출력