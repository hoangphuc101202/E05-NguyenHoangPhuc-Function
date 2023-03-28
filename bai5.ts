import {question} from 'readline-sync';
/**
 * lay ten hop le tu ban phim
 * @returns Ten hop le cua nguoi dung
 */
function nhapTen(): string {
    let name : string = "";
    do {
        name = question("Nhap ten: ");
        
    }while(name == "")
    return name;
    
}
/**
 * Lay nam sinh tu ban phim
 * @returns tuoi cua nguoi dung
 */

function nhapNamsinh() : number{
    let age : number ;
    do{
        age =   Number(question("Nhap tuoi ")) ;
        
    }while(age <= 0 || age >= 2024)
    return age;
}

/**
 * 
 * @param name Lay ten tu nguoi dung 
 * @param age Lay tuoi tu nguoi dung
 * @returns Ra loi chao 
 */
function xinChao(name : string, age : number): number {
    console.log("Xin chao minh ten " +name);
    console.log("Minh sinh nam " +age);
    console.log("Rat vui duoc gap ban");
    const tuoi = 2023 - age;
    return tuoi;
}
/**
 * Xuat ra man hinh Ten tuoi va loi chao
 */
function Xuat(): void{
    let ten: string = nhapTen();
    let tuoi : number = nhapNamsinh();
    xinChao(ten,tuoi);
}

Xuat();
