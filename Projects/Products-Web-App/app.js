
(async () => {


    const url = "https://fakestoreapi.com/products"
    const cardElm = document.querySelector(".container")
    const searchElm = document.querySelector("#searchInput")

    const getData = async () => {
        const res = await fetch(url)
        return await res.json()

    }

    const product = await getData()

    console.log(product)

    const generateProduct = (product) => {
        return `<div class="card">
        <div class="img-container">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-container">
            <h2>${product.title}</h2>
            <p>${product.description.split(" ").slice(0, 20).join(" ")}</p>
            <button>${product.price}$</button>
        </div>
    </div>`

    }
    const renderProduct = (product) => {
        cardElm.innerHTML = "";

        product.forEach(product => {

            cardElm.innerHTML += generateProduct(product);
        });
    }

    const checkTextcontain = (text, searchText) => {
        text.toString().title.toLowerCase().includes(searchText)
    }

    const filterHandler = (event) => {
        const searchText = event.target.value.toLowerCase()

        const filterProducts = product.filter((product) => {
           return  checkTextcontain(product.title, searchText) 
        })
        renderProduct(filterProducts)
    }

    searchElm.addEventListener("keyup", filterHandler)
    renderProduct(product)
})()

