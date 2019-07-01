const baseUrl = 'https://jsonplaceholder.typicode.com/posts';



const createDocNode = (e) => {
    let elem =  document.createElement(e);
    return elem
}

fetch(baseUrl)
  .then(response => {
    return response.json()
  })
  
  .then(data => {
    localStorage.removeItem('popData')
    // console.log(data)
    const list = document.getElementById('list')
    data.forEach(e => {
        let li = createDocNode('li');
        let h2 = createDocNode('h2');
        let p = createDocNode('p');
        let btn = createDocNode('button');
        list.appendChild(li)
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(btn);
        h2.innerHTML = e.title
        p.innerHTML = e.body
        btn.innerHTML = "View Details"
        btn.setAttribute('data-id',`${e.userId}`)
        btn.setAttribute('data-target','modal1')
        btn.setAttribute('class', 'btn-small waves-effect waves-light red accent-4 modal-trigger')
        btn.addEventListener('click', btnClick);
    });
  })

 
  .catch(err => {
    
    // console.log(err)
  })
  const pop = document.getElementById('popData')
  const createPopNode = (e) => {
      let elem =  document.createElement(e);
      return pop.appendChild(elem)
  }


 function btnClick (popDetail){
  popData.innerHTML= ''
  let id = this.getAttribute('data-id')
  let loader = document.getElementById('loader')
  // this.classList.add('loader')
  if(JSON.parse(localStorage.getItem(id))){
    createPopup(JSON.parse(localStorage.getItem(id)))
    // loader.classList.add('hide')
  } 
  else{
    loader.classList.remove('hide')
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(dresponse => {  
      loader.classList.add('hide')
      return dresponse.json()
      
    })
    .then(detaildata => {
      localStorage.setItem(id,JSON.stringify(detaildata));
      let popDetail = JSON.parse(localStorage.getItem(id))
      createPopup(detaildata)      
    })
  }
 }

 function createPopup(popDetail){  
  let title = createPopNode('h3')
  let name = createPopNode('p')
  let userName = createPopNode('p')
  let email = createPopNode('p')
  let company = createPopNode('p')
  let address = createPopNode('p')
  let phone = createPopNode('p')
  let website = createPopNode('p')

  title.innerHTML = 'Details'
  name.innerHTML = `Name: <span>${popDetail.name}</span>`
  userName.innerHTML = `Username: ${popDetail.username}`
  email.innerHTML = `Email: <span>${popDetail.email}</span>`
  company.innerHTML = `Company: <span>${popDetail.company.name}</span>`
  address.innerHTML = `Address: ${popDetail.address.city}, ${popDetail.address.suite}, ${popDetail.address.zipcode}. `
  phone.innerHTML = `Phone: <span>${popDetail.phone}</span>`
  website.innerHTML = `Website: ${popDetail.website}`
 }

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);   
  }); 