import { question } from "readline-sync";


function NhapdoF(): number{
    const f : number = Number(question("Nhap do F: "));
    return f;
}

function ChuyendoC(): number {
    // NhapdoF();
    let a : number = NhapdoF();
    const C = 5/9*(32 -a);
    return C;
}
// let a = ChuyendoC();
console.log(ChuyendoC());