var r = 1;
var phi = math.PI/3; // 60°
var theta = math.PI/6; // 60°
console.log("raio =" + r + "; phi=" + phi + "rad");
var x = r*Math.cos(theta)*Math.sin(phi);
var y = r*Math.sin(theta)*Math.sin(phi);
var z = r*Math.cos(phi);
console.log("x= " + x + "; y= " + y + "; z= " + z);

function myRound(numero, casasdecimais) {
    return Math.round(numero*Math.pow(10, casasdecimais))/Math.pow(10, casasdecimais);
}

function EsfericaParaCartesiana(r, phi, theta, casasdecimais=3) {
    var x = myRound(r*Math.round*Math.cos(theta)*Math.sin(phi), 3);
    var y = myRound(r*Math.round*Math.sin(theta)*Math.sin(phi), 3);
    var z = myRound(r*Math.round*Math.cos(phi), 3);
    return "x= " + x + "; y= " + y + "; z= " + z;
}

console.log(EsfericaParaCartesiana(1, Math.PI/3, Math.PI/6));
console.log(EsfericaParaCartesiana(3, Math.PI/6, Math.PI/3));
console.log(EsfericaParaCartesiana(2, Math.PI/4, Math.PI/4));