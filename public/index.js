const  app = function(){
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}


const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const beers = JSON.parse(this.response);
  populateList(beers);
  populateDropDown(beers);
  const select = document.querySelector('select');
  select.addEventListener('change', function(){
    var beer = beers[select.value];
    handleSelectChange(beer)
  });


}

const populateList = function(beers){
  const ul = document.querySelector('#beer-list');
  beers.forEach(function(beer){
    const li = document.createElement('li');
    li.textContent = beer.name + ", " + beer.tagline;
    ul.appendChild(li);
  });
}

const populateDropDown = function(beers){
  const dropdown = document.querySelector('#beers');
  beers.forEach(function(beer){
    const option = document.createElement('option');
    option.value = beers.indexOf(beer);
    option.textContent = beer.name;
    dropdown.appendChild(option);
    });

}

const handleSelectChange = function(beer){
  const ul = document.querySelector('#selected-beer');
  const nameLi = document.querySelector('#nameLi');
  nameLi.textContent = beer.name;
  const taglineLi = document.querySelector('#taglineLi');
  taglineLi.textContent = beer.tagline;

  ul.appendChild(nameLi)
  ul.appendChild(taglineLi)


}

window.addEventListener('load', app);
