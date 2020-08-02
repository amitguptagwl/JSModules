//export default class User {
class User {
    constructor(public name: string, public age: number){
    }
}
    
//export function printName(user){
function printName(user: User){
    console.log(user.name);
}
    
//export function printAge(user){
function printAge(user: User){
    console.log(user.age);
}

export default User
export {printName, printAge}