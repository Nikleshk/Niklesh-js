const capitalize = str=>str.toUppercase();

export const capitalizeString = (string)=>{
    return string.charAt(0).toUppercase() + string.slice(1);
}
export const foo = "bar";
export const bar = "foo";
console.log(capitalizeString);
