// stack (primitive), Heap (Non-primitive)
// +++++++++++++++++++++++memory(heap and stack)+++++++++++++++++++++++++++
//  stack (primitive)
//  sabu primitive type ra data stack memory store hua.
//  stack memory re data ra real copy jai. jadi copy re kichi change kara jai ta main data ru value change huani
let myname = "kunal";
let anothername = myname;
anothername = "king";
console.log(anothername);
console.log(myname);

// heap (reference)
//sabu reference type ra data heap memory store hua.
// heap memore re assign data ra reference jai. jadi reference data re change karajiba ta main data re change haba
let userone = {
    email: "user@google.com",
    phNo:"6372570116"
}
let userTwo = userone;
userTwo.email = "unknown@google.com";
console.log(userTwo);
console.log(userone);