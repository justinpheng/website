var allFilters = document.querySelectorAll('ul.controls li.buttons');
var allCards = document.querySelectorAll('section.gallery div.card');

for(var i = 0; i < allFilters.length; i++){
  allFilters[i].addEventListener('click', myFunction);
}

function myFunction(){
  var currentTab = document.querySelector('ul.controls .active');
  currentTab.classList.remove('active');
  this.classList.add('active');

  var filter = this.getAttribute('data-filter');
  if(filter != 'all'){
    for(let i = 0; i < allCards.length; i++){
      allCards[i].classList.add('hide');
      allCards[i].classList.remove('active');
      var currentItem = allCards[i].getAttribute('data-item');
      if(currentItem == filter){
        allCards[i].classList.add('active');
        allCards[i].classList.remove('hide');
      }
    }
  }
  else{
    for(let i = 0; i < allCards.length; i++){
      allCards[i].classList.remove('hide');
      allCards[i].classList.add('active');
    }
  }
}