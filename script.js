// script.js

// Handle form submission and receipt generation
document.getElementById("receiptForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const customerName = document.getElementById("customerName").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const pricePerGram = parseFloat(document.getElementById("pricePerGram").value);

    // Validate inputs
    if (isNaN(quantity) || isNaN(pricePerGram) || quantity <= 0 || pricePerGram <= 0) {
        alert("Please enter valid quantity and price.");
        return;
    }

    // Calculate total price
    const totalPrice = quantity * pricePerGram;
    document.getElementById("totalPrice").value = totalPrice.toFixed(2);

    // Generate receipt content
    const receiptContent = `
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Quantity (grams):</strong> ${quantity.toFixed(2)}</p>
        <p><strong>Price per Gram (USD):</strong> ${pricePerGram.toFixed(2)}</p>
        <p><strong>Total Price (USD):</strong> ${totalPrice.toFixed(2)}</p>
        <p><em>Thank you for choosing NAASI GOLD BUYING AGENCY!</em></p>
    `;
    document.getElementById("receiptDetails").innerHTML = receiptContent;

    // Show receipt
    document.getElementById("receipt").style.display = "block";
});

// Print receipt functionality
document.getElementById("printBtn").addEventListener("click", function() {
    const receipt = document.getElementById("receipt").innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Receipt</title></head><body>');
    printWindow.document.write(receipt);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});
