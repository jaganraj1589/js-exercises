const columns = document.querySelectorAll('.classifiedColumn')
const pocketBlock = document.getElementById('pocket')
const pockets = document.querySelector('.pocket ul')


const pocketClick = (e) =>{
    let letter = e.target.innerHTML.charAt(0)
    if(e.target.nodeName === 'LI'){
        if (letter === 'A'){
            columns[0].appendChild(e.target)
        }
        if (letter === 'B'){
            columns[1].appendChild(e.target)
        }
        if (letter === 'C'){
            columns[2].appendChild(e.target)
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

        if(pockets.children.length === 0){
            pocket.parentNode.removeChild(pocket)
        }
    }            
        
}

pocketBlock.addEventListener('click', pocketClick);
