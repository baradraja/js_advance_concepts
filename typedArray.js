const buffer = new ArrayBuffer(16);

if(buffer.byteLength === 16){
    console.log('its 16 byte');
} else {
    console.log('its wrong size');
}

const int32View = new Int32Array(buffer);

for(let i=0; i<int32View.length; i++)
    int32View[i] = i *3;
console.log(int32View);

//int32View.push(5);

const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}

int16View[0] = 32;
console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);

console.log(int32View);
console.log(int16View);


//Working with complex data structures
/* 
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};

*/

const buffer1 = new ArrayBuffer(24);

const idView = new Uint32Array(buffer1, 0, 1);
const usernameView = new Uint8Array(buffer1, 4, 16);
const amountDueView = new Float32Array(buffer1, 20, 1);

console.log(idView);
console.log(usernameView);
console.log(amountDueView);


//Conversion to normal arrays
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
const normalArray1 = [...typedArray];
console.log(normalArray);
console.log(normalArray1);
