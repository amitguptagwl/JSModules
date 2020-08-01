//export default class User {
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
    
//export function printName(user){
function printName(user){
    console.log(user.name);
}
    
//export function printAge(user){
function printAge(user){
    console.log(user.age);
}

export default User
export {printName, printAge}