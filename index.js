const string = "Hello World";
const pattern = /l/;
const result    = string.match (pattern)

console.log(result);
if (result){
    console.log ('found');
} else {
    console.log ('not found');
}