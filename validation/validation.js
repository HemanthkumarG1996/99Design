// -------------------------- first form validation-----------------

// // First Name Validation

var firstName = document.getElementById("san_name");

var firstNameValidation = function () {
  var firstNameValue = firstName.value.trim();
  var validFirstName = /^[A-Za-z]+$/;
  var firstNameErr = document.getElementById("name_error0");
  // localStorage.setItem("name", firstNameValue);

  if (
    firstNameValue == ""
    // ||
    // firstNameValue.length == 1 ||
    // firstNameValue.length == 2
  ) {
    firstNameErr.innerHTML = " Please Enter Name";
  }

  //
  else if (firstNameValue.length == 1 || firstNameValue.length == 2) {
    firstNameErr.innerHTML = "Name must be more than 2 characters";
  }
  //
  else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML = "Name must be string without white spaces";
    // } else if (firstNameValue.length == 2) {
    //   firstNameErr.innerHTML = "Name must be more than 2 characters";
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};

firstName.oninput = function () {
  firstNameValidation();
};

// Email Address Validation

var emailAddress = document.getElementById("san_email");
var emailAddressValidation = function () {
  var emailAddressValue = emailAddress.value.trim();
  var validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailAddressErr = document.getElementById("email_error0");
  // localStorage.setItem("Email", emailAddressValue);

  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Please Enter Email Address";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML = "Email Address must be in valid format";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

emailAddress.oninput = function () {
  emailAddressValidation();
};

// Mobile Number Validation

var mobileNumber = document.getElementById("san_contact");

var mobileNumberValidation = function () {
  var mobileNumberValue = mobileNumber.value.trim();
  var validMobileNumber = /^[0-9]*$/;
  var mobileNumberErr = document.getElementById("contact_error0");
  // localStorage.setItem("Number", mobileNumberValue);

  if (mobileNumberValue == "") {
    mobileNumberErr.innerHTML = "Please Enter Mobile Number";
  } else if (!validMobileNumber.test(mobileNumberValue)) {
    mobileNumberErr.innerHTML = "Mobile Number must be a number";
  } else if (mobileNumberValue.length != 10) {
    mobileNumberErr.innerHTML = "Mobile Number must have 10 digits";
  } else {
    mobileNumberErr.innerHTML = "";
    return true;
  }
};
mobileNumber.oninput = function () {
  mobileNumberValidation();
};

//Business type
var businessType = document.getElementById("san_business_type");

var businessTypeValidation = function () {
  var businessValue = businessType.value.trim();
  var businessErr = document.getElementById("business_error0");

  if (businessValue == "") {
    businessErr.innerHTML = "Please Enter Business Type";
  } else if (businessValue.length <= 2) {
    businessErr.innerHTML = "Business Type must contain atleast 3 characters";
  } else {
    businessErr.innerHTML = "";
    return true;
  }
};

businessType.oninput = function () {
  businessTypeValidation();
};

// message
var messageType = document.getElementById("san_message");

var messageValidation = function () {
  var messageValue = messageType.value.trim();
  var messageErr = document.getElementById("message_error0");

  if (messageValue == "") {
    messageErr.innerHTML = " Please enter a message";
  } else if (messageValue.length <= 9) {
    messageErr.innerHTML = "Message should contain atleast 10 characters";
  } else {
    messageErr.innerHTML = "";
    return true;
  }
};

messageType.oninput = function () {
  messageValidation();
};
// validation on submit

document.getElementById("form_id").onsubmit = function (e) {
  e.preventDefault();

  firstNameValidation();
  emailAddressValidation();
  mobileNumberValidation();
  businessTypeValidation();
  messageValidation();

  if (
    firstNameValidation() == true &&
    emailAddressValidation() == true &&
    mobileNumberValidation() == true &&
    businessTypeValidation() == true &&
    messageValidation() == true
  ) {
    alert(
      "Thanks for your interest with 99designagency.Our executive will contact you soon."
    );

    const myObj = {
      name: document.getElementById("san_name").value,
      email: document.getElementById("san_email").value,
      contact: document.getElementById("san_contact").value,
      business: document.getElementById("san_business_type").value,
      message: document.getElementById("san_message").value
    };

    const myJSON = JSON.stringify(myObj);
    window.localStorage.setItem("userInfo1", myJSON);
  } else {
    // alert("verification failed:form1");
  }
};

// // ----------  second form validation---------------------

// First Name Validation
var firstName1 = document.getElementById("san_name1");

var firstNameValidation1 = function () {
  var firstNameValue1 = firstName1.value.trim();
  var validFirstName1 = /^[A-Za-z]+$/;
  var firstNameErr1 = document.getElementById("name_error1");
  // localStorage.setItem("name", firstNameValue1);

  if (firstNameValue1 == "" || firstNameValue1.length == 2) {
    firstNameErr1.innerHTML =
      " Name is required, must be more than 2 characters";
  } else if (!validFirstName1.test(firstNameValue1)) {
    firstNameErr1.innerHTML = "Name must be only string without white spaces";
    //  }else if(firstNameValue1.length == 2){

    //   firstNameErr1.innerHTML="Name must be more than 2 characters";
  } else {
    firstNameErr1.innerHTML = "";
    return true;
  }
};

firstName1.oninput = function () {
  firstNameValidation1();
};

// Email Address Validation

var emailAddress1 = document.getElementById("san_email1");
var emailAddressValidation1 = function () {
  var emailAddressValue1 = emailAddress1.value.trim();
  var validEmailAddress1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailAddressErr1 = document.getElementById("email_error1");
  // localStorage.setItem("Email", emailAddressValue1);

  if (emailAddressValue1 == "") {
    emailAddressErr1.innerHTML = "Email Address is required";
  } else if (!validEmailAddress1.test(emailAddressValue1)) {
    emailAddressErr1.innerHTML =
      "Email Addre must be in valid formate with @ symbol";
  } else {
    emailAddressErr1.innerHTML = "";
    return true;
  }
};

emailAddress1.oninput = function () {
  emailAddressValidation1();
};

// Mobile Number Validation

var mobileNumber1 = document.getElementById("san_contact1");

var mobileNumberValidation1 = function () {
  var mobileNumberValue1 = mobileNumber1.value.trim();
  var validMobileNumber1 = /^[0-9]*$/;
  var mobileNumberErr1 = document.getElementById("contact_error1");
  // localStorage.setItem("Number", mobileNumberValue1);

  if (mobileNumberValue1 == "") {
    mobileNumberErr1.innerHTML = "Mobile Number is required";
  } else if (!validMobileNumber1.test(mobileNumberValue1)) {
    mobileNumberErr1.innerHTML = "Mobile Number must be a number";
  } else if (mobileNumberValue1.length != 10) {
    mobileNumberErr1.innerHTML = "Mobile Number must have 10 digits";
  } else {
    mobileNumberErr1.innerHTML = "";
    return true;
  }
};
mobileNumber1.oninput = function () {
  mobileNumberValidation1();
};
// business
var businessType1 = document.getElementById("san_business_type1");

var businessTypeValidation1 = function () {
  var businessValue1 = businessType1.value.trim();
  var businessErr1 = document.getElementById("business_error1");

  if (businessValue1 == "") {
    businessErr1.innerHTML = " Business Type is required";
  } else if (businessValue1.length <= 2) {
    businessErr1.innerHTML = "Business Type must contain atleast 3 characters";
  } else {
    businessErr1.innerHTML = "";
    return true;
  }
};

businessType1.oninput = function () {
  businessTypeValidation1();
};
// message
var messageType1 = document.getElementById("san_message1");

var messageValidation1 = function () {
  var messageValue1 = messageType1.value.trim();
  var messageErr1 = document.getElementById("message_error1");

  if (messageValue1 == "") {
    messageErr1.innerHTML = " Message is required";
  } else if (messageValue1.length <= 9) {
    messageErr1.innerHTML = "Message should contain atleast 10 characters";
  } else {
    messageErr1.innerHTML = "";
    return true;
  }
};

messageType1.oninput = function () {
  messageValidation1();
};
// validation on submit

document.getElementById("form_id2").onsubmit = function (e) {
  e.preventDefault();
  firstNameValidation1();
  emailAddressValidation1();
  mobileNumberValidation1();
  businessTypeValidation1();
  messageValidation1();

  if (
    firstNameValidation1() == true &&
    emailAddressValidation1() == true &&
    mobileNumberValidation1() == true &&
    businessTypeValidation1() == true &&
    messageValidation1() == true
  ) {
    alert(
      "Thanks for your interest with 99designagency.Our executive will contact you soon."
    );

    const Obj2 = {
      name: document.getElementById("san_name1").value,
      email: document.getElementById("san_email1").value,
      contact: document.getElementById("san_contact1").value,
      business: document.getElementById("san_business_type1").value,
      message: document.getElementById("san_message1").value
    };

    const myJSON2 = JSON.stringify(Obj2);
    window.localStorage.setItem("userInfo2", myJSON2);
  } else {
    // alert("verification failed:form2");
  }
};
