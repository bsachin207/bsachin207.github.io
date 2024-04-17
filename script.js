function generateQRCode() {
    // Get input text
    const inputText = document.getElementById('textInput').value;

    // Generate QR code
    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: inputText,
        size: 300
    });
}
