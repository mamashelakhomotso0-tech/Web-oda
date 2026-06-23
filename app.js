// ======================================
// KING JACXN BOND
// APP.JS
// ======================================

// PRODUCTS CART
let cart = [];

// ======================================
// ADD PRODUCT TO CART
// ======================================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to quotation basket.");
}

// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    const cartItems =
    document.getElementById("cartItems");

    const cartTotal =
    document.getElementById("cartTotal");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>
                ${item.name} - R${item.price}
            </span>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;
    });

    cartTotal.innerHTML =
    "Total: R" + total;
}

// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

// ======================================
// CLEAR CART
// ======================================

function clearCart() {

    cart = [];

    updateCart();
}

// ======================================
// REFERENCE NUMBER
// FORMAT:
// KJB-20-001-26-YYYY-MM-DD
// ======================================

function generateReferenceNumber() {

    const today = new Date();

    const year = today.getFullYear();

    const month =
    String(today.getMonth() + 1)
    .padStart(2, '0');

    const day =
    String(today.getDate())
    .padStart(2, '0');

    const date =
    year + "-" + month + "-" + day;

    return "KJB-20-001-26-" + date;
}

// ======================================
// QUOTATION FORM
// ======================================

document.addEventListener(
"DOMContentLoaded",
function () {

    const form =
    document.getElementById(
    "quotationForm"
    );

    if (!form) return;

    form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        if (cart.length === 0) {

            alert(
            "Please select products first."
            );

            return;
        }

        const name =
        document.getElementById(
        "customerName"
        ).value;

        const email =
        document.getElementById(
        "customerEmail"
        ).value;

        const phone =
        document.getElementById(
        "customerPhone"
        ).value;

        const notes =
        document.getElementById(
        "customerNotes"
        ).value;

        const reference =
        generateReferenceNumber();

        let products = "";

        let total = 0;

        cart.forEach(item => {

            products +=
            item.name +
            " - R" +
            item.price +
            "\n";

            total += item.price;

        });

        alert(

`✅ REQUEST PREPARED SUCCESSFULLY

Reference Number:

${reference}

Please keep this reference number for future communication.

Press OK to continue to WhatsApp and send your quotation request to our team.`

        );

        let whatsappMessage =

`👑 KING JACXN BOND

QUOTATION REQUEST

REFERENCE:
${reference}

NAME:
${name}

EMAIL:
${email}

CELL NUMBER:
${phone}

SELECTED PRODUCTS:

${products}

TOTAL:
R${total}

ADDITIONAL NOTES:
${notes}

Please send my quotation.

Thank you.`;

        const whatsappNumber =
        "27712693665";

        const whatsappURL =

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
        whatsappMessage
        );

        window.open(
        whatsappURL,
        "_blank"
        );

    });

});

// ======================================
// SPIN & WIN GAME
// ======================================

const rewards = [

"🎉 5% Discount",

"🎉 10% Discount",

"🎉 15% Discount",

"🎉 Free Delivery",

"🎉 Free Roll-On",

"🎉 Free Sample",

"🎉 R50 Voucher",

"🎉 R100 Voucher",

"😔 Better Luck Next Time",

"😔 Better Luck Next Time",

"😔 Better Luck Next Time"

];

// ======================================
// SPIN FUNCTION
// ======================================

function spinWheel() {

    const wheel =
    document.getElementById(
    "wheel"
    );

    wheel.style.transform =
    "rotate(1440deg)";

    wheel.style.transition =
    "3s ease";

    setTimeout(() => {

        const reward =

        rewards[
        Math.floor(
        Math.random() *
        rewards.length
        )
        ];

        document.getElementById(
        "rewardResult"
        ).innerHTML =

        "<h2>" +
        reward +
        "</h2>";

        alert(
        "Spin Result:\n\n" +
        reward
        );

    }, 3000);

}

// ======================================
// NEWSLETTER
// ======================================

function subscribeNewsletter() {

    const email =
    document.getElementById(
    "newsletterEmail"
    ).value;

    if (email === "") {

        alert(
        "Please enter your email address."
        );

        return;
    }

    alert(

    "🎉 Thank you for joining the KING JACXN BOND VIP Club."

    );

    document.getElementById(
    "newsletterEmail"
    ).value = "";
}

// ======================================
// FLOATING WHATSAPP BUTTON
// ======================================

function openWhatsApp() {

    window.open(
    "https://wa.me/27712693665",
    "_blank"
    );

}

// ======================================
// WEBSITE LOADED
// ======================================

console.log(
"👑 KING JACXN BOND WEBSITE LOADED SUCCESSFULLY"
);