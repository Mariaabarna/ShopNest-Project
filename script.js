const products = [
    { id: 1, title: "Smartphone", price: 9999, category: "electronics", image: "images/smartphone.jpeg", desc: "Latest 5G smartphone with 64MP camera." },
    { id: 2, title: "Headphones", price: 2999, category: "electronics", image: "images/headphone.jpeg", desc: "Wireless headphones with noise cancellation." },
    { id: 3, title: "Sneakers", price: 1999, category: "fashion", image: "images/sneaker.jpeg", desc: "Stylish and comfortable sports sneakers." },
    { id: 4, title: "Smart Watch", price: 4999, category: "electronics", image: "images/smartwatch.jpeg", desc: "Fitness tracking and heart rate monitor." },
    { id: 5, title: "Backpack", price: 399, category: "fashion", image: "images/backpack.jpeg", desc: "Durable backpack for daily use." },
    { id: 6, title: "Table Lamp", price: 599, category: "home", image: "images/tablelamp.jpeg", desc: "LED lamp with adjustable brightness." },
    { id: 7, title: "T-Shirt", price: 499, category: "fashion", image: "images/tshirt.jpeg", desc: "Cotton round-neck t-shirt." },
    { id: 8, title: "Blender", price: 1299, category: "home", image: "images/blender.jpeg", desc: "Powerful kitchen blender." },
    { id: 9, title: "Shoes", price: 1499, category: "fashion", image: "images/shoes.jpeg", desc: "Running shoes for men and women." },
    { id: 10, title: "Coffee Mug", price: 299, category: "home", image: "images/coffeemug.jpeg", desc: "Ceramic mug with cool design." },
    { id: 11, title: "Camera", price: 8999, category: "electronics", image: "images/camera.jpeg", desc: "Capture stunning photos and 4K videos with high optical zoom." },
    { id: 12, title: "Sun Glasses", price: 299, category: "fashion", image: "images/sunglasses.jpeg", desc: "UV-protected polarized sunglasses for a stylish and safe outdoor experience." },
    { id: 13, title: "Mouse", price: 999, category: "electronics", image: "images/mouse.jpeg", desc: "High-precision wireless mouse with adjustable DPI and long battery life." },
    { id: 14, title: "Key Board", price: 3999, category: "electronics", image: "images/keyboard.jpeg", desc: "Ergonomic mechanical keyboard with RGB backlight and smooth key response." },
    { id: 15, title: "Laptop", price: 19999, category: "electronics", image: "images/lap.jpeg", desc: "High-performance laptop with fast processor and long-lasting battery." },
    { id: 16, title: "Washing Machine", price: 39999, category: "home", image: "images/washingmachine.jpeg", desc: "Fully automatic washing machine with smart wash programs and quick dry." },
    { id: 17, title: "Refrigerator", price: 13999, category: "home", image: "images/fridge.jpeg", desc: "Double-door refrigerator with fast cooling and energy-efficient technology" },
    { id: 18, title: "Light", price: 99, category: "electronics", image: "images/light.jpeg", desc: "Bright and energy-efficient LED light suitable for home and office use." },
    { id: 19, title: "Sofa", price: 14999, category: "home", image: "images/sofa.jpeg", desc: "Comfortable 3-seater sofa with premium cushions and modern design." },
    { id: 20, title: "Slippers", price: 399, category: "fashion", image: "images/slipper.jpeg", desc: "Soft and lightweight slippers perfect for indoor and casual outdoor use." },
    { id: 21, title: "Bed", price: 23999, category: "home", image: "images/bed.jpeg", desc: "Queen-sized bed with durable wooden frame and soft mattress support." },
    { id: 22, title: "Television", price: 11999, category: "home", image: "images/television.jpeg", desc: "Smart LED TV with Full HD display and built-in streaming apps." },
    { id: 23, title: "Charger", price: 199, category: "electronics", image: "images/charger.jpeg", desc: "Fast-charging USB charger compatible with multiple devices and safety protection." },
    { id: 24, title: "Lipstick", price: 99, category: "fashion", image: "images/lipstick.jpeg", desc: "Fast-charging USB charger compatible with multiple devices and safety protection." },
    { id: 25, title: "Curtain", price: 599, category: "home", image: "images/curtain.jpeg", desc: "Elegant blackout curtains to block sunlight and enhance room privacy" },
    { id: 26, title: "Hair Band", price: 49, category: "fashion", image: "images/hairband.jpeg", desc: "Soft and flexible hair band suitable for everyday use and styling." },
    { id: 27, title: "Jeans", price: 599, category: "fashion", image: "images/jeans.jpeg", desc: "Classic stretch-fit jeans for all-day comfort and a trendy look." },
    { id: 28, title: "Radio", price: 1999, category: "electronics", image: "images/radio.jpeg", desc: "Portable FM/AM radio with clear sound and long battery life." },
    { id: 29, title: "Mixie", price: 1299, category: "home", image: "images/mixie.jpeg", desc: "Powerful mixer grinder with stainless steel jars and multi-speed control." },
    { id: 30, title: "Gowns", price: 799, category: "fashion", image: "images/gown.jpeg", desc: "Elegant long gown made from soft fabric, perfect for parties and events." },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let wishlistBtn = document.getElementById("wishlistBtn");
let wishlistCount = document.getElementById("wishlistCount");
let wishlistPanel = document.getElementById("wishlistPanel");
let wishlistItems = document.getElementById("wishlistItems");
let closeWishlist = document.getElementById("closeWishlist");
let productContainer = document.getElementById("productContainer");
let cartBtn = document.getElementById("cartBtn");
let cartPopup = document.getElementById("cartPopup");
let cartItems = document.getElementById("cartItems");
let cartCount = document.getElementById("cartCount");
let totalPrice = document.getElementById("totalPrice");
let closeCart = document.getElementById("closeCart");
let searchInput = document.getElementById("searchInput");
let categoryBtns = document.querySelectorAll(".categories button");
let modal = document.getElementById("productModal");
let modalImg = document.getElementById("modalImg");
let modalTitle = document.getElementById("modalTitle");
let modalDesc = document.getElementById("modalDesc");
let closeModal = document.querySelector(".closeModal");
let toggleDark = document.getElementById("toggleDark");


function renderProducts(items) {
    productContainer.innerHTML = "";
    items.forEach(product => {
        let item = document.createElement("div");
        item.className = "product";
        item.innerHTML = `
      <img src="${product.image}" alt="${product.title}" data-id="${product.id}">
      <h3>${product.title}</h3>
      <p class="price">₹${product.price}</p>
      <div class="buttons">
        <button class="add-cart" data-id="${product.id}">Add to Cart</button>
        <button class="wishlist" onclick="toggleWishlist(this)">♡</button>
      </div>
    `;
        productContainer.appendChild(item);
    });
}
renderProducts(products);
productContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-cart")) {
        const id = +e.target.dataset.id;
        addToCart(id);
    }
});


function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(p => p.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h4>${item.title}</h4>
                    <p>₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</p>
                    <div class="qty-controls">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        cartItems.appendChild(div);
        total += item.price * item.qty;
    });

    totalPrice.textContent = total;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

updateCart();


function changeQty(id, delta) {
    const item = cart.find(p => p.id === id);
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }
    updateCart();
}
localStorage.setItem("cart", JSON.stringify(cart));

function toggleWishlist(el) {
    const productCard = el.closest(".product");
    const id = +productCard.querySelector("img").dataset.id;
    const product = products.find(p => p.id === id);

    if (el.classList.contains("liked")) {
        wishlist = wishlist.filter(item => item.id !== id);
        el.classList.remove("liked");
        el.textContent = "♡";
    } else {
        wishlist.push(product);
        el.classList.add("liked");
        el.textContent = "❤️";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlist();
}

function showWishlist() {
    const wishlistContainer = document.getElementById("wishlistContainer");
    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>No items in wishlist.</p>";
        return;
    }

    wishlist.forEach(product => {
        const item = document.createElement("div");
        item.className = "wishlist-item";
        item.innerHTML = `
            <img src="${product.image}" width="80">
            <h4>${product.title}</h4>
            <p>₹${product.price}</p>
        `;
        wishlistContainer.appendChild(item);
    });
}
document.getElementById("clearWishlist").onclick = () => {
    wishlist = [];
    localStorage.removeItem("wishlist");
    updateWishlist();
    renderProducts(products);
};

function updateWishlist() {
    wishlistItems.innerHTML = "";
    wishlistCount.textContent = wishlist.length;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "<p>No items in wishlist.</p>";
        return;
    }

    wishlist.forEach(product => {
        const item = document.createElement("div");
        item.className = "wishlist-item";
        item.innerHTML = `
            <img src="${product.image}" width="60">
            <div>
                <h4>${product.title}</h4>
                <p>₹${product.price}</p>
            </div>
        `;
        wishlistItems.appendChild(item);
    });
}



cartBtn.onclick = () => cartPopup.classList.toggle("hidden");
closeCart.onclick = () => cartPopup.classList.add("hidden");




productContainer.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        const id = +e.target.dataset.id;
        const product = products.find(p => p.id === id);
        modalImg.src = product.image;
        modalTitle.textContent = product.title;
        modalDesc.textContent = product.desc;
        modal.classList.remove("hidden");
    }
});
closeModal.onclick = () => modal.classList.add("hidden");


categoryBtns.forEach(btn => {
    btn.onclick = () => {
        const category = btn.dataset.category;
        if (category === "all") renderProducts(products);
        else renderProducts(products.filter(p => p.category === category));
    };
});


searchInput.oninput = () => {
    const value = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(value));
    renderProducts(filtered);
};


toggleDark.onclick = () => {
    document.body.classList.toggle("dark");
    cartPopup.classList.toggle("dark");
};




