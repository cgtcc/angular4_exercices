console.log('***TYPED VARIABLES*****')

//typed variables declaration

var myString: string
var myNum: number
var myBool: boolean
var myVar: any
/*
var stringArray: string[]
var numberArray: number[]
var booleanArray: boolean[]
*/
var stringArray: Array<string>
var numberArray: Array<number>
var booleanArray: Array<boolean>

var strNumTuple: [string, string, number]

//assign values

myString = 'Test 1,2,3,4,5,6,7,8,9!'.slice(0, 5)
myNum = 5 % 9
myBool = true
myVar = true
stringArray = ['Clef 1', 'Clef 2', 'Clef 3', 'Clef 4', 'Clef 5'].reverse()
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Math.sqrt(16)]
booleanArray = [true, true, false, false, true]

strNumTuple = ['Clef 1', myString, 1000, Math.PI, myNum, myNum]

var myUndefined: undefined = null
var myVoid: void = undefined
var myNull: null = void

    //output

    console.log(myString + myNum + myBool + myVar +
        stringArray + numberArray + booleanArray + strNumTuple
    )

