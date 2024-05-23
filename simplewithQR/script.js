document.getElementById('paymentMethod').addEventListener('change', function() {
  var paymentMethod = this.value;
  var cardDetails = document.getElementById('cardDetails');
  var qrCodeSection = document.getElementById('qrCodeSection');

  if (paymentMethod === 'qrCode') {
    cardDetails.style.display = 'none';
    qrCodeSection.style.display = 'block';
  } else {
    cardDetails.style.display = 'block';
    qrCodeSection.style.display = 'none';
  }
});

document.getElementById('generateQRButton').addEventListener('click', function() {
  var amount = document.getElementById('amount').value;

  // Generate QR code based on the amount
  var qrCodeURL = generateQRCode(amount);
  var qrCode = document.getElementById('qrCode');
  qrCode.innerHTML = '<img src="' + qrCodeURL + '" alt="QR Code">';
});

document.getElementById('payButton').addEventListener('click', function() {
  var paymentMethod = document.getElementById('paymentMethod').value;
  var cardType = document.getElementById('cardType').value;
  var cardNumber = document.getElementById('cardNumber').value;
  var cardHolder = document.getElementById('cardHolder').value;
  var expMonth = document.getElementById('expMonth').value;
  var expYear = document.getElementById('expYear').value;
  var cvv = document.getElementById('cvv').value;
  var amount = document.getElementById('amount').value;
  var email = document.getElementById('email').value;
  var billingAddress = document.getElementById('billingAddress').value;
  var country = document.getElementById('country').value;

  if (paymentMethod !== 'qrCode') {
    // Simulate payment process for other payment methods
    setTimeout(function() {
      var paymentResult = document.getElementById('paymentResult');
      paymentResult.innerHTML = 'Payment successful!';
      paymentResult.style.color = 'green';
    }, 2000); // Simulating payment process with a delay of 2 seconds
  }
});

function generateQRCode(data) {
  // Mock QR code generation logic
  // In a real scenario, you would use a library or API to generate QR codes
  var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(data);
  return qrCodeURL;
}
