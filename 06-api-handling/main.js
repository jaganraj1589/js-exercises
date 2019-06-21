const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const detailUrl = 'https://jsonplaceholder.typicode.com/users/{user_id}';


const list = document.getElementById('list')
const createDocNode = (e) => {
    let elem =  document.createElement(e);
    return list.appendChild(elem)
}

fetch(baseUrl)
  .then(response => {
    return response.json()
  })
  .then(data => {
    
    // console.log(data)
    
    data.forEach(e => {
        let li = createDocNode('li'); 
        let h2 = createDocNode('h2');
        let p = createDocNode('p');
        let btn = createDocNode('button');
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(btn);
        h2.innerHTML = e.title
        p.innerHTML = e.body
        btn.innerHTML = "View Details"
        btn.setAttribute('data-id',`${e.id}`)
        btn.setAttribute('data-target','modal1')
        btn.setAttribute('class', 'btn-large waves-effect waves-light orange')
        
    });
    const getDetails = document.querySelectorAll('.btn-large')
    getDetails.forEach(e =>{
      
      e.addEventListener(click, function(i){
        i.preventDefault();
        console.log(e)
      })
    })
  })
  .catch(err => {
    
    // console.log(err)
  })



  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });