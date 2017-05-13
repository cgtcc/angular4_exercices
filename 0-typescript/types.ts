console.log('***TYPED VARIABLES*****')

//typed variables declaration

let myString: string
let myNum: number
let myBool: boolean
let myVar: any
/*
let stringArray: string[]
let numberArray: number[]
let booleanArray: boolean[]
*/
let stringArray: Array<string>
let numberArray: Array<number>
let booleanArray: Array<boolean>

let strNumTuple: [string, string, number]

//assign values

myString = 'Test 1,2,3,4,5,6,7,8,9!'.slice(0, 5)
myNum = 5 % 9
myBool = true
mylet = true
stringArray = ['Clef 1', 'Clef 2', 'Clef 3', 'Clef 4', 'Clef 5'].reverse()
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Math.sqrt(16)]
booleanArray = [true, true, false, false, true]

strNumTuple = ['Clef 1', myString, 1000, Math.PI, myNum, myNum]

let myUndefined: undefined = null
let myVoid: void = undefined
let myNull: null = void

    //output

    console.log(myString + myNum + myBool + myVar +
        stringArray + numberArray + booleanArray + strNumTuple
    )

