// เป็น array ที่เก็บค่า string เท่านั้น
// เขียนอีกแบบ type TestArray = Array<string>

type TestArray = Array<string>;
type TestArray2 = number[];
// Tuple
type TestArray3 = [boolean, string, number];

// array เปล่าๆ อนุญาตให้สามารถ initial ค่าได้
const arr: TestArray = [];
const arr2: TestArray2 = [10, 20];
const arr3: TestArray3 = [true, "aum", 30];

console.log(arr3);
