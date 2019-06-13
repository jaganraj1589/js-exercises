model = {
    numberInput : document.getElementById("numberInput"),
    generate : document.getElementById("generate"),
    div : document.getElementById("row")
}

const generateTriangle = (e) => {
    model.div.innerHTML = ""
    let rowValue = model.numberInput.value;
    let rowSplit = rowValue.trim().split(' ');
    let int = '<p style="color:red;">'+rowValue+'</p>';
    model.div.insertAdjacentHTML("afterend",int);
    let rowLength = rowSplit.length;
    let finalArr = [];
    for (let i=0; i < rowLength; i++) {
        let triangle = [];        
            rowSplit.forEach((i,j) => {
                arr = parseInt(i) + parseInt(rowSplit[j + 1]);
                if(!isNaN(arr) && arr.length!=0)
                    triangle.push(arr);
            });
            rowSplit = triangle;
          
        if(rowSplit.length>=1){ 
            finalArr.push(rowSplit); 
        }
    }
    console.log(finalArr);
    finalArr.forEach((el, indx) => {
        setTimeout( _ => {
            let className = 'row_'+indx;
            let txt = el.toString().replace(/,/g, " &nbsp");
            let p = '<p class='+className+' style="color:red;">'+txt+'</p>';
            model.div.insertAdjacentHTML("afterend",p);
            console.log(txt.length)
        }, indx * 1000);
        
    })
}

model.generate.addEventListener('click', generateTriangle)

// for (let i=0; i < rowLength; i++){
//     let triangle = []
//     // console.log(triangle)
    // rowSplit.forEach((val, j) => {
    //     if(j < (rowLength - 1))
    //         triangle.push(parseInt(rowSplit[j]) + parseInt(rowSplit[j + 1]))
            
    // });
//     console.log(rowSplit = triangle);
// }    

// for (let j=0; j < rowLength; j++){
//     arr = parseInt(rowSplit[j]) + parseInt(rowSplit[j + 1]);
//         triangle.push(arr);
// }