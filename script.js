var contactInfo = document.getElementById("contact-info");
var contactMeHtml = "./contact-me.html"

function redirect() {
    document.location.replace(contactMeHtml);
}

contactInfo.addEventListener('click', redirect());