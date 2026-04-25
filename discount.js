function calculateDiscount() {
    const original = parseFloat(document.getElementById("original").value);
    const percent = parseFloat(document.getElementById("discountPercent").value);

    if (original && percent) {
        const discountAmount = (original * percent) / 100;
        const finalPrice = original - discountAmount;
        document.getElementById("discountResult").innerHTML =
            `You save ₹${discountAmount.toFixed(2)}. Final price: ₹${finalPrice.toFixed(2)}`;
    } else {
        document.getElementById("discountResult").innerHTML = "Please enter price and discount.";
    }
}
