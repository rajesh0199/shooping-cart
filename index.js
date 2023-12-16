

let cartitem_box = document.getElementById("cartitem_box")

let total_sum = 0
console.log(total_sum);

let shopItemsData = [
    {
      id: 1,
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: 2,
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: 3,
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: 4,
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
  ];



let call_cartitem_box = ()=>{
    return (cartitem_box.innerHTML = shopItemsData.map(x=>{
        let {id, name, price, desc, img} = x
        return`
        <div id=product_${id} class="box">
                <img width="300px" height="380px" src="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/deep_olive_green_corduroy_shirt_for_men_base_3_11_2022_700x933.jpg" alt="">
                <div class="shirt_details">
                <h2>${name}</h2>
                <p>${desc}</p>
                <div class="shirt_price">
                    <h2> ${price}</h2>
                    <div class="shirt_quantity">
                        <i onclick="deccrement_fun(${id})" class="bi bi-dash text-danger"></i>
                        <div id=${id}>0</div>
                        <i onclick="increment_fun(${id})" class="bi bi-plus text-success"></i>
                    </div>
                </div>
                </div>
            </div> `
    }).join(""))
}

call_cartitem_box()


let increment_fun = (id)=>{
    let increment_number = parseInt(document.getElementById(id).textContent) 
    increment_number = increment_number + 1
    document.getElementById(id).textContent = increment_number
    total_sum = increment_number
    console.log(total_sum);
}


let deccrement_fun = (id)=>{
    let increment_number = parseInt(document.getElementById(id).textContent) 
    increment_number = increment_number - 1
    if(increment_number === -1){
        return
    }else{
        document.getElementById(id).textContent = increment_number
    }
    


}

let update_fun = ()=>{
    
}

