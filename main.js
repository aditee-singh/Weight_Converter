document.getElementById('output').style.visibility='hidden';
document.getElementById('graminput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility='visible';
    let g = e.target.value;
    document.getElementById('poundsOutput').innerHTML=g*0.0022046;
    document.getElementById('kgOutput').innerHTML=g/1000;
    document.getElementById('ozOutput').innerHTML=g*0.035274;

});