import { question } from "readline-sync";

function NhapSoNguyen(): number {
    let n : number ;
    do{
        n = Number(question("Nhap so nguyen n"));
    }
    while(n<0);
    return n;
}
function KTSNT() :void {
    let n : number = NhapSoNguyen();
    if(n<=1){
        console.log("false");
    }
    else{
        let isprime : boolean = true;
        for(let i : number = 2; i <= Math.sqrt(n); i++){
            if(n%i ===0 ){
                isprime = false;
                break;
            }
        }
        if(isprime){
            console.log("True");
        }
        else{
            console.log("false");
        }
    }
}
KTSNT();

