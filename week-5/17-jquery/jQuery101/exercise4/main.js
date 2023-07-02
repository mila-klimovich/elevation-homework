// $(".item").on("click", function() {
//     if ($(this).data('instock')) {
//         $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`);
//     }
    
// });

// $("#cart").on("click", "div", function () {
//     $(this).remove();
// });


$(".item").on("click", function() {
    if ($(this).data('instock')) {
        // Check if the item is already in the cart
        const itemName = $(this).text();
        const $cartItem = $("#cart").find(`div[data-item="${itemName}"]`);

        if ($cartItem.length > 0) {
            // Item already exists in the cart, update the quantity
            const currentQuantity = parseInt($cartItem.data('quantity'));
            $cartItem.data('quantity', currentQuantity + 1);
            $cartItem.text(`${itemName} x${currentQuantity + 1}`);
        } else {
            // Item does not exist in the cart, add it with quantity 1
            $("#cart").append(`<div class="cart-item" data-item="${itemName}" data-quantity="1">${itemName} x1</div>`);
        }
    }
});

$("#cart").on("click", "div", function () {
    const $cartItem = $(this);
    const currentQuantity = parseInt($cartItem.data('quantity'));
    
    if (currentQuantity > 1) {
        // If the item quantity is more than 1, decrease the quantity
        $cartItem.data('quantity', currentQuantity - 1);
        $cartItem.text(`${$cartItem.data('item')} x${currentQuantity - 1}`);
    } else {
        // If the item quantity is 1, remove the item from the cart
        $cartItem.remove();
    }
});
