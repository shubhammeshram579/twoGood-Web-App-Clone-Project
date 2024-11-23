
// page load
window.addEventListener('load', () => {
  document.getElementById('preloader').style.opacity = '0';
  setTimeout(() => document.getElementById('preloader').remove(), 500);
  document.body.classList.add('loaded');
});



// querySelector for function butten
let sebtn1 = document.querySelector(".navbar .part2 .fa-magnifying-glass");
let sebtn2 = document.querySelector("#searbtn2");
let searbar = document.querySelector(".searbar");
let navbarbtn = document.querySelector(".navbar");



// click after effect
sebtn1.addEventListener("click",function(){
    searbar.style.display = "block";
    navbarbtn.style.display = "none";
    searbar.style.display = "flex";
    searbar.style.alignItems= "center";
    searbar.style.justifyContent = "center";
})


sebtn2.addEventListener("click",function(){
    searbar.style.display = "none"
    navbarbtn.style.display = "block"
    navbarbtn.style.display = "flex";
    navbarbtn.style.alignItems= "center";
    navbarbtn.style.justifyContent = "space-around";
})


// searchbtn
const searchButton = document.querySelector('.searbar #searchButton');


// search input
const searchInput = document.querySelector('.searbar #search');



//1. Event listener for input field in EveningProduct page
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
  
    console.log("query", query)
  
    let apiURL = query.length > 0 ? `/evining/search?q=${query}` : '/evining/search';
  
    // Fetch results from the server
    fetch(apiURL)
      .then(response => response.json())
      .then(eveningproducts => {
        // Clear previous results
        let clutter = "";
        if (eveningproducts.length === 0) {
          clutter = "<p>No items found.</p>";
        } else {
          eveningproducts.forEach(function (val) {
            clutter += `<div class="cards">
                <div class="card">
                <h1>${val.name}</h1>
                <h3>${val.qty}</h3>
                <h1 style="font-size: 20px;">${val.price}</h1>
                </div>
                <div class="card2">
                    <img src="${val.pimage}" alt="">
                </div> 
                </div>`;
          });
        }
  
        // store card2 product list
        document.querySelector(".eveningProduct .card2").innerHTML = clutter;

        
      })
      .catch(error => console.error('Error fetching products:', error));
  });








//2. Event listener for input field in afternoonProduct page
searchInput.addEventListener('input', function () {
    const query = searchInput.value;
  
    console.log("query", query)
  
    let apiURL = query.length > 0 ? `/Afternoon/search?q=${query}` : '/Afternoon/search';
  
    // Fetch results from the server
    fetch(apiURL)
      .then(response => response.json())
      .then(eveningproducts => {
        // Clear previous results
        let clutter = "";
        if (eveningproducts.length === 0) {
          clutter = "<p>No items found.</p>";
        } else {
          eveningproducts.forEach(function (val) {
            clutter += `<div class="cards">
                <div class="card">
                <h1>${val.name}</h1>
                <h3>${val.qty}</h3>
                <h1 style="font-size: 20px;">${val.price}</h1>
                </div>
                <div class="card2">
                    <img src="${val.pimage}" alt="">
                </div> 
                </div>`;
          });
        }
  
        document.querySelector(".afternoon-product .card2").innerHTML = clutter;
  
        
      })
      .catch(error => console.error('Error fetching products:', error));
  });



//3. remove input search text
searchButton.addEventListener("click",function(){
    searchInput.value = '';
})
