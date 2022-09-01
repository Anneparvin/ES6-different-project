const loadPhones =(searchText,dataLimit)=>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data,dataLimit))
}
const displayPhones = (phones,dataLimit) =>{
    console.log(phones)
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent ='';
    // display 12 phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length>12){
      phones=phones.slice(0,12);
      showAll.classList.remove('d-none');
    }
    else{
      showAll.classList.add('d-none');
    }
    // display no phones found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length== 0){
      noPhone.classList.remove('d-none');
    }
    else{
      noPhone.classList.add('d-none');
    }
    // display all photos
    phones.forEach(phone =>{
       const phonesDiv = document.createElement('div');
       phonesDiv.classList.add('phone');
       phonesDiv.innerHTML = `
      <div class="card h-100  p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show-details</button>
                
                  
                  
                  </div>
                
              
       `
       phonesContainer.appendChild(phonesDiv);
    })
    // stop loader
    toggleSpinner(false);
}


// handle search dataLimit
const processSearch = (dataLimit)=>{
  toggleSpinner(true);
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
loadPhones(searchText,dataLimit);
}
document.getElementById('btn-search').addEventListener('click', function() {
    processSearch(12);
})
document.getElementById('search-field').addEventListener('keypress', function(e) {
if(e.key === 'enter'){
  processSearch(12);
}
})

// handle search loader spinner....
document.getElementById('btn-search').addEventListener('click', function() {
  // start loader
toggleSpinner(true);
const searchField = document.getElementById('search-field');
const searchText = searchField.value;
loadPhones(searchText,12);
})
const toggleSpinner=isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none');
  }
}
document.getElementById('btn-show-all').addEventListener('click', function() {
  processSearch();
})
const loadPhoneDetails = id =>{
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone =>{
  console.log(phone);
  const modalTitle = document.getElementById('phoneDetailModalLabel');
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
  <p>Release Date:${phone.releaseDate?phone.releaseDate:"no release date found"}</p>
  <p>storage:${phone.mainFeatures?phone.mainFeatures.storage:"no storage found"}</p>
  <p>others:${phone.others?phone.others.Blutooth:"no Blutooth found"}</p>
  `
}
  loadPhones('a',12);