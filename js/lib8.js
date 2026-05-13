function addproduct(product){
    const myDiv= document.createElement("div");
            myDiv.setAttribute("class","product-item");

            const myImage= document.createElement("div");
            myImage.setAttribute("class","product-image");
            const productImg = document.createElement("img");
            productImg.setAttribute("src",product.img);
            productImg.setAttribute("alt","product.name");
            myImage.appendChild(productImg);
            myDiv.appendChild(myImage);

            const myInfo= document.createElement("div");
            myInfo.setAttribute("class","product-info");
            const name = document.createElement("h3");
            const nameText = document.createTextNode(product.name);
            name.appendChild(nameText);

            const price = document.createElement("p");
            const priceText = document.createTextNode("Giá: "+product.price);
            price.appendChild(priceText);

            const link = document.createElement("a");
            link.setAttribute("href", product.link+"?id="+product.id);
            const linkText = document.createTextNode("Xem chi tiết");
            link.appendChild(linkText);

            myInfo.appendChild(name);
            myInfo.appendChild(price);
            myInfo.appendChild(link);

            myDiv.appendChild(myInfo);

            const container = document.getElementById("product-list");
            container.appendChild(myDiv);
}
const productList = [
    {
        id:1,
        name: "Amla Candy",
        price: 50000,
        img: "../assets/images/pd2.jpg",
        link: "detail.html",
        desc: "Try these tasty Amla Candies and your taste buds will delight you. Bring it wherever you go and enjoy the great taste anywhere at any time. The most vital gift God has adopted for us is the Indian gooseberry known as Amla. Ayurveda says that many illnesses can be improved by this magical berry. If compared to Vitamin C, one small Amla or Indian Gooseberry is equivalent to 2 Oranges. Amla is a natural health booster, rich in fibre and vitamins that encourage healthy hair, glowing skin and improved eyesight. It is also a natural antioxidant and has properties that are anti-aging and anti-stress. As an after-meal and as a digestive, it is highly useful. To make the flavorful Sweet Amla Candy, Amla or Indian gooseberry is dried and sweetened with sugar and glucose."
    },
    {
        id:2,
        name: "ten3",
        price: 60000,
        img: "../assets/images/pd3.jpg",
        link: "detail.html"
    },
    {
        id:3,
        name: "ten4",
        price: 70000,
        img: "../assets/images/pd4.jpg",
        link: "detail.html"
    },
    {
        id:4,
        name: "ten5",
        price: 70000,
        img: "../assets/images/pd.jpg",
        link: "detail.html"
    }
];
function loadAllProduct(){
    const load = document.getElementById("product-list");

    for(let i = 0; i < productList.length; i++){
        addproduct(productList[i]);
    }
}