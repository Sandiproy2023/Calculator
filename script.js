let values = document.getElementById('values')
let button = document.querySelectorAll('button')
// console.log(button);
let srcvalues ="";

for(var i=0; i<button.length; i++){
    button[i].addEventListener('click',(e)=>{
        //    console.log(e.target);
        //    console.log(e.target.innerHTML);
        var numberEntered = e.target.innerHTML
        // console.log(numberEntered);

        if(numberEntered == 'c'){
            srcvalues =""
            values.value =srcvalues
        }else if(numberEntered == '='){
            values.value=eval(srcvalues)
            srcvalues=""
    
        } else{
            srcvalues+=numberEntered
            // console.log(numberEntered);
            values.value=srcvalues
        }
        
    })
}
