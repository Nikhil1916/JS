// function a(){
//     var b=1;
//     setTimeout(function(){
//         console.log(b);
//     },1000);
//     console.log("hello");
// }
// a();



// function a(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },(i*1000));
//         console.log(i+"  k");
//     }
// }
// a();
// a();  //1 2 3 4 5

// as let is block scope so at every iteration a new block is made and that block contains the memory of its parent so if i=2 then the
// block will also print 2 as the block is pointing to its memory or parent as read in closures


// function a(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// a();
// a(); // 6 6 6 6 6

// function a(){
//     for(var i=1;i<=5;i++){
//         function wrapper(b){
//         setTimeout(function(){
//             console.log(b);
//         },b*1000)
//     }
//     wrapper(i);
//     }
// }
// a(); //  1 2 3 4 5
// we r calling a function wrapper so that every time a new function is made and points to the parent or memory so as var is function scope
// a new function (execution context) is made so it is pointing to its parent memory so if we pass wrapper function with 1 then it this function will
// be there in a diff context execution and will be pointing to 1 or its parent;
