const loadPhones =(searchText)=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}
const displayPhones = phones =>{
    console.log(phones)
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone =>{
       const phonesDiv = document.createElement('div');
       phonesDiv.classList.add('phone');
       phonesDiv.innerHTML = `
      <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
       `
       phonesContainer.appendChild(phonesDiv);
    })
}
document.getElementById('btn-search').addEventListener('click', function() {
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
loadPhones(searchText);
})
loadPhones();