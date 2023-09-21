const data = `{
    "items": [
        {
            "title": "All-in-One Car Seat",
            "text": "One car seat that fits your child, vehicle and life from birth through booster."
        },
        {
            "title": "Space-Saving Design",
            "text": "Slim, space-saving design takes up less space in vehicle without compromising comfort."
        },
        {
            "title": "Easiest to Install Correctly",
            "text": "Chicco patented SuperCinch force-multiplying LATCH tightener ensures a tight and secure fit every time."
        },
        {
            "title": "No Added Chemicals",
            "text": "ClearTex products meet federal flammability standards without added chemicals."
        }
    ]
}`

document.addEventListener('DOMContentLoaded', function() {
    const items = JSON.parse(data)
    console.log(items)
    const element = items.items;
    const row = document.getElementsByClassName('row-json')[0];

    const container = document.createElement('div');
    container.classList.add('box-json');
    document.body.appendChild(container);

    row.appendChild(container);

    items.items.forEach(e => {

        let card = document.createElement('div');
        card.classList.add('card-json');

        let title = document.createElement('p');
        title.classList.add('title-json');
        title.innerText = e.title;

        let paraf = document.createElement('p');
        paraf.classList.add('p-json');
        paraf.innerText = e.text;

        container.appendChild(card)
        card.appendChild(title);
        card.appendChild(paraf);
    });
})


//click en inuts radio - cambio de imagen

const radioBlack = document.querySelector('.radio-black');
const radioPurple = document.querySelector('.radio-purple');
const imgCart = document.querySelector('.imgCart');

document.addEventListener('change', function(event) {
    if (event.target === radioBlack && event.target.checked) {
        // Si se hace clic en radio-black y está marcado, cambia la imagen a la imagen black
        imgCart.src = './assets/product.png'; 
    } else if (event.target === radioPurple && event.target.checked) {
        imgCart.src = './assets/product-lilac.png'; 
    }
});
