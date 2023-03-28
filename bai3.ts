function xinChao(name : string, age : number): number {
    console.log("Xin chao minh ten " +name);
    console.log("Minh sinh nam " +age);
    console.log("Rat vui duoc gap ban");
    const tuoi = 2023 - age;
    return tuoi;
}
const t = xinChao("Bao", 2002);
console.log(t);