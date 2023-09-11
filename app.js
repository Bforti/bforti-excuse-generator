let who=["Bruno","Fuad","Pedro","Gabriel"];
let action=["perdió", "golpeó", "olvidó","dañó" ];
let what = ["el carro", "el PS4", "la muñeca","el saxofón" ];
let when= ["ayer", "la semana pasada", "el viernes","hace mucho tiempo" ];
function onLoan(){
    let excusa =who[Math.floor(Math.random()*who.length)]+" "+action[Math.floor(Math.random()*action.length)]+" "+what[Math.floor(Math.random()*what.length)]+" "+when[Math.floor(Math.random()*when.length)]+" ";
    document.getElementById("excusa").innerHTML=excusa;

}
onLoan();