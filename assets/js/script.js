
const loadBtn = document.querySelector(".loadBtn");
const cards = document.querySelector('.cards');


let page = 8;
function loadData(page) {
    fetch(`http://localhost:3000/data?page=${page}`)
        .then(response => response.json())
        .then(data => {
            data.slice(page - 8, page).forEach(element => {
                cards.innerHTML += `
                    <div class="card">
                        <div class="img">
                            <img src="${element.image}" alt="">
                        </div>
                        <div class="txt">
                            <h4>${element.name}</h4>
                            <p>${element.description}</p>
                            <div class="crud">
                            
                                <button onclick="deleteCard(${element.id})" class="delete">Delete</button>
                                <button onclick="Update(${element.id})" class="update">Update</button>
                                <button onclick="Detail(${element.id})" class="detail">Details</button>
                                 <i  onclick="addFavorite(${element.id})"class=" bi-heart-fill"></i> 
                            </div>
                        </div>
                    </div>`;
            });
        });
}

loadBtn.addEventListener('click', () => {
    //  page++
    page+=4
    loadData(page);
 
});


loadData(page);




function deleteCard(id) {
        axios.delete(`http://localhost:3000/data/${id}`);
        window.location.reload()
      }





function Detail(id){
    window.location = `detail.html?id=${id}`
} 



function addFavorite(id) {
    axios.get("http://localhost:3000/data/"  + id)
    .then(res=> {
        axios.post("http://localhost:3000/favorite", res.data);
        
    })
}



function Update(id){
    window.location = `./update.html?id=${id}`
}





document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector("nav");
    let menuButton = document.getElementById("click");
    let menu = document.querySelector(".menu");
  
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("show-menu");
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000) {
        menu.classList.remove("show-menu");
      }
    });
  });




  
