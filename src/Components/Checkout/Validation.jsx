export default function Validation(values) {
  let errors = {};

  // first name
  if (!values.first.trim()) {
    errors.first = "First name is required";
  }

  // last name
  if (!values.last.trim()) {
    errors.last = "Last name is required";
  }

  // email
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }

  // address
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }

  // country
  if (!values.country) {
    errors.country = "Country is required";
  }

  //postal
  if (!values.postal) {
    errors.postal = "Postal is required";
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.postal)) {
    errors.postal = "Postal is invalid";
  }
  // phone number
  if (!values.tel) {
    errors.tel = "Phone number is required";
  } else if (!/^\+?\d{10,}$/.test(values.tel)) {
    errors.tel = "Invalid phone number";
  }

  return errors;
}
