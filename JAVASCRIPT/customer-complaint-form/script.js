const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");

const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroupCheckboxes = document.querySelectorAll(
  '#complaints-group input[type="checkbox"]',
);
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroupRadios = document.querySelectorAll(
  '#solutions-group input[type="radio"]',
);
const solutionDescription = document.getElementById("solution-description");
const otherComplaintCheckbox = document.getElementById("other-complaint");
const otherSolutionRadio = document.getElementById("other-solution");

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isValidOrderNo = (orderNo) => {
  const orderNoRegex = /^2024\d{6}$/;
  return orderNoRegex.test(orderNo);
};

const isValidProductCode = (productCode) => {
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  return productCodeRegex.test(productCode);
};
const isValidQuantity = (quantity) => {
  const quantityValue = parseInt(quantity, 10);
  return !isNaN(quantityValue) && quantityValue > 0;
};

const isValidComplaintDescription = () => {
  if (otherComplaintCheckbox.checked) {
    const complaintDescriptionValue = complaintDescription.value.trim();
    return complaintDescriptionValue.length >= 20;
  }
  return true;
};
const isValidSolutionDescription = () => {
  if (otherSolutionRadio.checked) {
    const solutionDescriptionValue = solutionDescription.value.trim();
    return solutionDescriptionValue.length >= 20;
  }
  return true;
};

const validateForm = () => {
  const isComplaintsGroupChecked = Array.from(complaintsGroupCheckboxes).some(
    (checkbox) => checkbox.checked,
  );
  const isSolutionsGroupChecked = Array.from(solutionsGroupRadios).some(
    (radio) => radio.checked,
  );

  return {
    "full-name": fullName.value.trim() !== "",
    email: isValidEmail(email.value),
    "order-no": isValidOrderNo(orderNo.value),
    "product-code": isValidProductCode(productCode.value),
    quantity: isValidQuantity(quantity.value),
    "complaints-group": isComplaintsGroupChecked,
    "complaint-description": isValidComplaintDescription(),
    "solutions-group": isSolutionsGroupChecked,
    "solution-description": isValidSolutionDescription(),
  };
};

const isValid = (validationResults) => {
  return Object.values(validationResults).every((result) => result === true);
};

form.addEventListener("change", (e) => {
  const validationResults = validateForm();
  let target = e.target;
  let targetId = target.id;

  if (target.type === "checkbox" || target.type === "radio") {
    target = target.closest("#complaints-group, #solutions-group");
    targetId = target.id;
  }

  if (validationResults[targetId]) {
    target.style.borderColor = "green";
  } else {
    target.style.borderColor = "red";
  }
});

form.addEventListener("submit", (e) => {
  const validationResults = validateForm();

  if (!isValid(validationResults)) {
    const invalidFields = Object.keys(validationResults).filter(
      (key) => !validationResults[key],
    );
    invalidFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.style.borderColor = "red";
      }
    });
    e.preventDefault();
  }
});
