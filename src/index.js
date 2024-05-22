import "./style/style.css";
import "./header-component.js";
import "./footer-component.js";
import "./button-component.js";

const form = document.querySelector("form");
const titleInput = form.elements.title;
const bodyInput = form.elements.body;
const createdAtInput = form.elements.createdAt;

form.addEventListener("submit", (event) => event.preventDefault());

const customValidationHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity("Tidak boleh ada simbol.");
    return;
  }

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Wajib diisi.");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity(
      "Tulis minimal 6 karakter (contoh: sepeda).",
    );
    return;
  }
};

titleInput.addEventListener("change", customValidationHandler);
titleInput.addEventListener("invalid", customValidationHandler);
titleInput.addEventListener("blur", handleValidationMessage);

bodyInput.addEventListener("change", customValidationHandler);
bodyInput.addEventListener("invalid", customValidationHandler);
bodyInput.addEventListener("blur", handleValidationMessage);

createdAtInput.addEventListener("change", customValidationHandler);
createdAtInput.addEventListener("invalid", customValidationHandler);
createdAtInput.addEventListener("blur", handleValidationMessage);

function handleValidationMessage(event) {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;
  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
}

let isClicked = document.querySelector("button-component");
const changeIdButton = document.getElementById("cekNotes");

changeIdButton.onclick = () => {
  isClicked.setAttribute("isClicked", "sudah");
};
