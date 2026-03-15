// const contacts = document.querySelectorAll(".contact");

// contacts.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log(e)

//     })
// })

const phone = document.querySelector("#phone");
const whatsapp = document.querySelector("#whatsapp");
const facebook = document.querySelector("#facebook");
const email = document.querySelector("#email");
const map = document.querySelector("#location");

phone.addEventListener("click", () => {
  window.location.href = "tel:+919701346797";
});

whatsapp.addEventListener("click", () => {
  let message = "Hello Sir, ";
  let url = "https://wa.me/919701346797?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});
facebook.addEventListener("click", () => {
  let url = "https://www.facebook.com/satishbabu.makireddy"

  window.open(url, "_blank");
});

email.addEventListener("click", () => {
  let email = "satishbabu.makireddy@gmail.com";
  let subject = "Write Your Subject here?";
  let body = "Dear Sir,";

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

map.addEventListener("click", () => {
  let url =
    "https://www.google.com/maps/place/Arce+Polymers+Pvt+Ltd,+D67+Thermoplastics+Unit/@17.5159526,78.4503168,831m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bcb8f483800a549:0x3d4294a4f17c10db!2sArce+Polymers+Pvt+Ltd,+D67+Thermoplastics+Unit!8m2!3d17.5159404!4d78.4525121!16s%2Fg%2F11vq26n14k!3m5!1s0x3bcb8f483800a549:0x3d4294a4f17c10db!8m2!3d17.5159404!4d78.4525121!16s%2Fg%2F11vq26n14k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

    window.open(url, "_blank")
});
