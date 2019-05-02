const columns = document.querySelectorAll('.classifiedColumn')
const blocks = document.querySelectorAll('.pocket ul li')
const pockets = document.querySelector('.pocket ul')

blocks.forEach(function(e){
    e.addEventListener('click',function(){        
        if(e.nodeName === 'LI'){
            let letter = e.innerHTML.charAt(0)
            if (letter === 'A'){
                columns[0].appendChild(e)
            }
            if (letter === 'B'){
                columns[1].appendChild(e)
            }
            if (letter === 'C'){
                columns[2].appendChild(e)
            }
            for(let i=0; i < columns.length; i++){
                let list = columns[i];   
                Array.from(list.querySelectorAll("li:not(:first-child)"))
                .sort((a, b) =>{
                    if (a.innerHTML > b.innerHTML) return 1
                    else return -1
                })
                .forEach(li => list.appendChild(li));
            }            
        }
        if(pockets.children.length === 0){
            pocket.parentNode.removeChild(pocket)
        }
    })
})

