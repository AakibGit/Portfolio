let api = "https://fakestoreapi.com/products"
let card = document.querySelector(".card-container")

const Fetchapi = async()=>{

    let res = await fetch(api)
    let data = await res.json()
    // console.log(data)

    data.forEach(element => {        
        card.innerHTML += `<div class="card">
        <div class="img-box">
            <img src="${element.image}" alt="">
        </div>
        <h4>${element.title}</h4>
        <h3>${element.price} $</h3>
        <button>Add to Cart</button>
    </div>`
    });
}

Fetchapi()