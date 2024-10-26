
//@ts-nocheck
function sum(){
    let obj={}
    return (a,b)=>{
        console.log(`value store in obj :${a} ${b} ${obj}`);
        
        if (!obj[`${a} ${b}`]) {
            console.log(` inside if `);
            obj[`${a} ${b}`]=a+b
            
        }
        return obj[`${a} ${b}`]
    





    }


}
let memorizedSum=sum();
console.log(memorizedSum(25,5));
console.log(memorizedSum(25,5));













