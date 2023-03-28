import {question} from 'readline-sync';
function xinChao(name : string, age : number): number {
    console.log("Xin chao minh ten " +name);
    console.log("Minh sinh nam " +age);
    console.log("Rat vui duoc gap ban");
    const tuoi = 2023 - age;
    return tuoi;
}
function Nhap(): void{
    const name : string = String(question("Nhap ten "));
    const age: number = Number(question("Nhap nam sinh "));
    const a = xinChao(name,age);
    console.log(a);
}
Nhap();
