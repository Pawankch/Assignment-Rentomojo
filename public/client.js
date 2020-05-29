console.log("Hi")
const p = document.querySelector('p')
const outputs = document.querySelector('#outputs')
const names = document.querySelector('#names')
fetch('/contacts/all').then((resp)=>{resp.json().then((data)=>{
    //const data2 = Object.entries(data)
   for(i = 0; i< data.length; i++)
    {
        console.log(data[i].email)
        outputs.innerHTML = <p> data[i].email 
        
        
    } 

})

})