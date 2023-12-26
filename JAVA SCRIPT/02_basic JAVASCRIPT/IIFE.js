// Immediately Invoked Function Expressions

(function chai () {
    //this is named IIFE
    console.log("DB connect");
}) ();
// () ()  => first () re function ra defination lekhiba au () ta hauchi exicution call

// IIFE ku arrow function re bi lekhi pariba
((name) => {
    //this is un-named IIFE
    console.log(`kunal.10 and ${name}`);
})("King Kunal");     // most impotant IIFE use kala pare semi-coloun(;) must use


