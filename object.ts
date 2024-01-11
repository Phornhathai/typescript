type TestObject = {
  id: number;
  value: string;
  status: boolean;
  power?: "ON" | "OFF";
};
const obj: TestObject = {
  id: 100,
  value: "Test",
  status: true,
  power: "ON",
};

const obj2: TestObject = {
  id: 100,
  value: "Test",
  status: true,
};

console.log(obj);
console.log(obj2);
