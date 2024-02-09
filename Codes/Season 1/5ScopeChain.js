// function a() {
//     console.log(b);
// }

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
a();