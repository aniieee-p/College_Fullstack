

const getMessage = (name)=>{
    console.log("hello" , name )
}

// Ques 1. given arr = [7, 9, 11, 33];
// find the sum of all the value, provide the output in roundoff Form.
// Math.floor() 16.5 -> 16
// Math.ceil() 16.5 -> 17
const arr = [7, 9, 11, 33];
const sum = arr.reduce((a, b) => a + b, 0);
const result1 = Math.floor(sum / 2);
console.log("Ques 1 result:", result1);

// Ques 2. given string = "Welcome to node js class". change to uppercase.
const str = "Welcome to node js class";
const result2 = str.toUpperCase();
console.log("Ques 2 result:", result2);

// Ques 3. create a n object of an Array.
const obj = { arr: [7, 9, 11, 33] };
console.log("Ques 3 result:", obj);

// Ques 4. check the string Pallindrome.
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};
console.log("Ques 4 result:", isPalindrome(str));

export default getMessage;
