let str:string = "test 1";
console.log(str);
let num:number = 29;
console.log("Today is " + num + "th");
let flag:boolean = true;
console.log("Do I want to sleep? " + flag);

let myArray: number[] = [1, 2, 3];
myArray.forEach((item) => {
    console.log(item);
}
)

let myUnknown: any = "anything we want";
console.log("My value is: " + myUnknown);

function countChar(value: string)
{
    return value.length;
}

function countCharNoSpace(value: string)
{
    let count = value.replace(" ","").length;
    return count;
}

function countCharNoYesSpace(value: string, check?: boolean)
{
    if(check == true)
    {
        console.log("Including spaces");
        return value.length;
    }
    else{
        console.log("Excluding spaces");
        let count = value.replace(" ","").length;
        return count;
    }
    
    
}



console.log("1. The number of characters is " + countChar(str));
console.log("2. The number of characters is " + countCharNoSpace(str));
console.log("3. The number of characters is " + countCharNoYesSpace(str, ));