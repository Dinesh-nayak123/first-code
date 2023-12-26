const user = {
    username: "kunal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`username:${this.username}`);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());

function User(userName, loginCount, isLoggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin
    return this
}
const userOne = new User("kunal", 12 , true);
const userTwo = new User("dinesh", 16 , false)
console.log(userOne);
console.log(userTwo);