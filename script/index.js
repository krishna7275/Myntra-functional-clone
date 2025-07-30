let itemBag;
onLoad()

function onLoad() {
    let bagItemStr = localStorage.getItem('itemBag');
    itemBag = bagItemStr ? JSON.parse(bagItemStr) : [];
    diplayBagIcon();
    displayItemOnHomapage();
    
}

 function addToBag(itemId){
 itemBag.push(itemId);
 localStorage.setItem("itemBag", JSON.stringify(itemBag));
 diplayBagIcon();
 }

 function diplayBagIcon() {
    let bagItemCountelement = document.querySelector(".bag-item-count");
    if (!bagItemCountelement) {
        return true;
    }
    if (itemBag.length > 0) {
        bagItemCountelement.style.visibility = 'visible';
    bagItemCountelement.innerText = itemBag.length;
 }
else{
bagItemCountelement.style.visibility = 'hidden';
}}

function displayItemOnHomapage() {
    let itemscontainerElement = document.querySelector(".items-container");

let innerHTML = '';
items.forEach(item => { 
    innerHTML +=  `
  <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <Span class="current-price">Rs ${item.current_price}</Span>
                    <Span class="original-price">Rs ${item.original_price}</Span>
                    <Span class="discount">(${item.discount_percentage}% OFF)</Span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
             </div>  
 `});

itemscontainerElement.innerHTML = innerHTML;
    
}
