// type declaration
// สร้าง type ของตัวเอง ไม่ใช้ type สำเร็จรูป
type Test = "test" | "westride" | number | boolean;
const test: Test = "test";
const test2: Test = 100;
const test3: Test = true;

// Binding
let b: string = "hello";
b = "Aum";
console.log(b);

// Function
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(10, 12));

// generic type
function generic<A>(x: A): A {
  return x;
}
// use function generic with argument string
console.log(generic<string>("Test"));

function addToArray<A, B>(a: A, b: B) {
  return [a, b];
}

console.log(addToArray<number, string>(10, "ten"));
