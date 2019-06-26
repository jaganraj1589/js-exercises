const baseUrl = 'https://jsonplaceholder.typicode.com/posts';


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
    
    console.log(data)
    
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

 function btnClick (){
  popData.innerHTML= ''
   let id = this.getAttribute('data-id')
   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(dresponse => {
        return dresponse.json()
      })
      .then(detaildata => {
        let title = createPopNode('h3')
        let name = createPopNode('p')
        let userName = createPopNode('p')
        let email = createPopNode('p')
        let company = createPopNode('p')
        let address = createPopNode('p')
        let phone = createPopNode('p')
        let website = createPopNode('p')

        title.innerHTML = 'Details'
        name.innerHTML = `Name: <span>${detaildata.name}</span>`
        userName.innerHTML = `Username: ${detaildata.username}`
        email.innerHTML = `Email: <span>${detaildata.email}</span>`
        company.innerHTML = `Company: <span>${detaildata.company.name}</span>`
        address.innerHTML = `Address: ${detaildata.address.city}, ${detaildata.address.suite}, ${detaildata.address.zipcode}. `
        phone.innerHTML = `Phone: <span>${detaildata.phone}</span>`
        website.innerHTML = `Website: ${detaildata.website}`
        console.log(detaildata)
      })
 }

 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);   
  });