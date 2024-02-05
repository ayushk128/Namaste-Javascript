// Concept 1 - Block Scope
// {
//     var a = 10;
//     let b = 20
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Concept 2 - Shadowing in case of var
// var a = 100;
// {
//     var a = 10;
//     let b = 20
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

// Concept 2 - Shadowing in case of let
// let b = 100
// {
//     var a = 10;
//     let b = 20
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);

// Concept 3 - Illeagle shadowing
// let a = 20;
// {
//     var a = 30; //Cannot shadow a let variable using var
// }

// Correct
// let a = 20;
// {
//     let a = 30;
//     console.log(a);
// }
// console.log(a);

// Concept 4 - Lexical block scope
const a = 100;
{
    const a = 50;
    {
        const a = 20;
        console.log(a);
    }
    console.log(a);
}
console.log(a);