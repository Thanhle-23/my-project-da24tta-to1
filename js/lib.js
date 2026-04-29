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
            link.setAttribute("href", product.link);
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
        name: "ten2",
        price: 50000,
        img: "../assets/images/pd2.jpg",
        link: "#"
    },
    {
        name: "ten3",
        price: 60000,
        img: "../assets/images/pd3.jpg",
        link: "#"
    },
    {
        name: "ten4",
        price: 70000,
        img: "../assets/images/pd4.jpg",
        link: "#"
    }
];
function loadAllProduct(){
    const load = document.getElementById("product-list");

    for(let i = 0; i < productList.length; i++){
        addproduct(productList[i]);
    }
}