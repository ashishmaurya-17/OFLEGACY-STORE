<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
function payNow() {
  var options = {
    "key": "RAZORPAY_KEY_ID",
    "amount": "149900",
    "currency": "INR",
    "name": "OFFLEGACY",
    "description": "H1 Smart Toy",
    "handler": function () {
      window.location.href = "success.html";
    }
  };
  var rzp = new Razorpay(options);
  rzp.open();
}
</script>
