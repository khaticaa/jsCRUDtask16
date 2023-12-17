let id = new URLSearchParams(window.location.search).get("id");

detaildivs = document.querySelector(".detaildivs")

fetch(`http://localhost:3000/data/${id}`)
        .then(reponse => reponse.json())
        .then(element => {
                detaildivs.innerHTML+= `  
                 <div class="detailcard">
                <div class="img">
                    <img src="${element.image}" alt="">
                </div>
                <div class="txt">
                    <h4>${element.name}</h4>
                    <p>${element.description}</p>
                </div>
            </div> 
            
        </div>`
})