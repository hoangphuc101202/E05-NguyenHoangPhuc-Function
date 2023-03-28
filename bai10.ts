import { question } from "readline-sync";

function KTSNT (n : number): boolean{
    if(n<=1 ){
        return false;
    }
    for(let i : number = 2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
        
    }
    return true;
}
function LietKeSNT(): void{
    const  m = Number ( question("Nhap m: "));
    const  n = Number (question("Nhap n: "));
    for(let i : number = m; i <= n; i++){
        if(KTSNT(i)){
            console.log(i);
        }
    }
}
LietKeSNT();