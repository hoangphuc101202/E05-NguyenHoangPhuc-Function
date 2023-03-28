import { question } from "readline-sync";

function Nhapa() : number {
    let  a : number = Number(question("Nhap a"));
    return a;
}
function Nhapb() : number {
    let b : number = Number(question("Nhap b"));
    return b;
}
function KTab() : void{
    let a : number = Nhapa();
    let b : number = Nhapb();
    if(a<b){
        console.log("Nho");
    }
    else if(a>b){
        console.log("Lon");
    }
    else{
        console.log("Bang");
    }
}
KTab();