// let name ="synchronous";
// console.log(name);
// let surName="code";
// console.log(surName);
// setTimeout(()=>{
//     console.log("Synchronoously syncing")
// },3000);


// setTimeout(()=>{
//     console.log("synchronously sycning -1")
// },4000)

// queueMicrotask(()=>console.log("Microtask syncing"))
// for(let  i=0; i<7; i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
//     console.log(i);
// };
// console.log(name,surName);


let myPromise = new Promise((resolve, reject)=>{
 let flag=true;
 if(flag){
    resolve("promise is regected");
}else{
    reject("promse is rejected")
}   
});
console.log(myPromise);

 async function fetchData(){
    let data = await fetch("https://fakestoreapi.com/products")
    let ans =await data.json();
    console.log(ans)
};
fetchData();