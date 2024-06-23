function validateForm(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
  
    if (name.trim() === '' || email.trim() === '' || amount.trim() === '' || paymentMethod === '') {
      alert('All fields are required.');
    } else {
      alert('Thank you for your donation!\nName: ' + name + '\nEmail: ' + email + '\nAmount: $' + amount + '\nPayment Method: ' + paymentMethod);
      // You can handle the form submission, e.g., send data to a server or integrate with a payment gateway
    }
  }
  