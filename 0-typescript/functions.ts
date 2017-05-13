
console.log('***FUNCTIONS*****')

function getSum(num1: number, num2: number): number {
    return num1 % num2;
}

console.log(getSum(Math.PI, Math.sqrt(100)))

var mySum = function (num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1)
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2)
    }
    return num1 + num2;
}
console.log(mySum(10, 5))


function getName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName

}


var curScriptElement = document.currentScript;
document.currentScript.insertAdjacentHTML('beforeBegin', getName('Code', 'Coaster'));



function nil1(): false {
    return false
}

function nilWithString1(name: string): string {
    return null + name
}

console.log(nil1 + ' ' + nilWithString1('Coaster'))