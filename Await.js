const datas = [
    {name : "Iron man ",Power:"Suits"},
    {name:"SpiderMan", Power : "spideysenses"}

];

function getDatas(){
setTimeout(()=> {
    let output = "";
    datas.forEach((data,index)=>{
        output+= `<li>${data.name}</li>`;
    })
    document.body.innerHTML =output
},1000);
}

function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error = false ;
        
            if(!error){
                resolve();

            }
            else{
                reject("There is something wrong with your program ")
            }
    
            
    
        },2000);

    })
    
    
}

/*createdata({name:"Flash", Power: "Speed "})
.then(getDatas)
.catch(err => console.log("There is something wrong with your program "))
*/
async function start(){
    await createdata({ name:"Batman ",Power:"I am rich "})
    getDatas();
}
start();








