let cart = [];

function addToCart(burgerName, typeName, quantityId) {
    const type = document.querySelector(`input[name="${typeName}"]:checked`).value;
    const quantity = document.getElementById(quantityId).value;

    if (quantity > 5) {
        alert("You cannot add more than 5 of the same type.");
        return;
    }

    cart.push({
        name: burgerName,
        type: type,
        quantity: parseInt(quantity)
    });

    alert("Burger added to cart!");
}

function viewCart() {
    const cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = "";

    if (cart.length === 0) {
        cartContent.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    const table = document.createElement("table");
    table.className = "cart-table";
    const header = table.createTHead();
    const headerRow = header.insertRow();
    headerRow.innerHTML = `
        <th>Name</th>
        <th>Type</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
    `;

    const body = table.createTBody();
    let total = 0;
    cart.forEach(item => {
        const price = getPrice(item.type);
        const itemTotal = price * item.quantity;
        total += itemTotal;

        const row = body.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.quantity}</td>
            <td>₹${price}</td>
            <td>₹${itemTotal}</td>
        `;
    });

    const footer = table.createTFoot();
    const footerRow = footer.insertRow();
    footerRow.innerHTML = `
        <td colspan="4" style="text-align:right;"><strong>Total Price:</strong></td>
        <td><strong>₹${total}</strong></td>
    `;

    cartContent.appendChild(table);
}

function getPrice(type) {
    switch (type) {
        case "veg":
            return 100;
        case "non-veg":
            return 200;
        case "egg":
            return 150;
        default:
            return 0;
    }
}

function getPrice(type) {
    switch (type) {
        case "veg":
            return 100;
        case "non-veg":
            return 200;
        case "egg":
            return 150;
        default:
            return 0;
    }
}
