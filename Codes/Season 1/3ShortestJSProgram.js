var a = 10;
function b() {
    var x = 10;
}
console.log(window.a);
console.log(a);  //By default it will point to the global space
console.log(this.a);