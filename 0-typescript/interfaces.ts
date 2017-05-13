//an interface is like creating contracts for other classes and objects to implement
//we can use them to define custom types without creating classes
//interfaces are NOT compiled to Javascript! It's simply for checking / validate done by ou ts.


//examples of interfaces

interface User {
    username: string;
    password: string;
    confirmPassword?: string; //optionnal property => does not have to be implemented
}
let user: User;
user = { username: 'user', password: 'secret' }  //DOES SATISFY




interface CanDrive {
    accelerate(speed: number): void;
}
let myCar: CanDrive = {
    accelerate: function (speed: number) {

    }
}