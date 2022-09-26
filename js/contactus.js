function sendMail() 
    {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let finalmessage = 'Name: ${name} <br> Email: ${email} <br> Message: ${message} <br>';

      Email.send({
      SecureToken : "1ccb2ff3-daa8-4098-b854-98a777e9be60",
      To : 'ism6225group10@gmail.com',
      From : "ism6225group10@gmail.com",
      Subject: "Sending Email using javascript with SMTPJS",
      Body: finalmessage
      })
      .then(function (message) {
      alert("Mail has been sent successfully")
      });
    }