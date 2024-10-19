let formData = {
    email: "",
    message: ""
};
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
messageInput.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", handleInput);
populateForm();



function handleInput(event){
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateForm(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if(savedMessage){
        formData = JSON.parse(savedMessage);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
}
function handleSubmit(event){
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
}