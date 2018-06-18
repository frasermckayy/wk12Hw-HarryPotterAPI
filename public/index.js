const  app = function(){
  const url = "http://hp-api.herokuapp.com/api/characters";
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
  const characters = JSON.parse(this.response);
  // populateList(characters);
  populateDropDown(characters);
  const select = document.querySelector('select');
  select.addEventListener('change', function(){
    var character = characters[select.value];
    handleSelectChange(character)

  });


}

const populateList = function(characters){
  const ul = document.querySelector('#character-list');
  characters.forEach(function(character){
    const li = document.createElement('li');
    li.textContent = character.name + ", " + character.species + ", " + character.gender + ", " + character.house
    + ", " + character.wand + ", " + character.patronus + ", " + character.actor + ", " + character.image;
    ul.appendChild(li);
  });
}

const populateDropDown = function(characters){
  const dropdown = document.querySelector('#characters');
  characters.forEach(function(character){
    const option = document.createElement('option');
    option.value = characters.indexOf(character);
    option.textContent = character.name;
    dropdown.appendChild(option);
    });

}

const characterImg = function(inputtedImg){
  const imageTag = document.createElement("img");
  imageTag.width = "500";
  imageTag.src = inputtedImg;
  return imageTag;
};

const handleSelectChange = function(character){
  const ul = document.querySelector('#selected-character');
  const nameLi = document.querySelector('#nameLi');
  nameLi.textContent = character.name;
  const speciesLi = document.querySelector('#speciesLi');
  speciesLi.textContent = character.species;
  const genderLi = document.querySelector('#genderLi')
  genderLi.textContent = character.gender;
  const houseLi = document.querySelector('#houseLi')
  houseLi.textContent = character.house;
  const wandLi = document.querySelector('#wandLi')
  wandLi.textContent = `${character.wand.wood}, ${character.wand.core}`;
  const patronusLi = document.querySelector('#patronusLi')
  patronusLi.textContent = character.patronus;
  const actorLi = document.querySelector('#actorLi')
  actorLi.textContent = character.actor;
  const imageLi = document.querySelector('#imageLi')
  imageLi.appendChild(characterImg(character.image));

  ul.appendChild(nameLi)
  ul.appendChild(speciesLi)
  ul.appendChild(genderLi)
  ul.appendChild(houseLi)
  ul.appendChild(wandLi)
  ul.appendChild(patronusLi)
  ul.appendChild(actorLi)
  ul.appendChild(imageLi)

 new PieChart();


}

window.addEventListener('load', app);
