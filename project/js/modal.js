// MODAL

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const closeIcon = document.querySelector(".modal_close");

let time;

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};

setTimeout(() => {
  openModal();
}, 10_000);

function checkScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    openModal();
    window.removeEventListener("scroll", checkScroll);
  }
}
window.addEventListener("scroll", checkScroll);

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modalTrigger.onclick = () => openModal();
closeIcon.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};
