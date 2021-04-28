const columnPorto = document.querySelectorAll('.col-portfolio');
columnPorto.forEach(porto => {
    porto.addEventListener('click', function() {
        // show modal
        showModal();
        // show image
        showImage(this);
    });
});
// show modal function
function showModal() {
    // add modal
    addBgModal();
    const modal = document.querySelector('.modal');
    modal.classList.add('active');
    // close modal
    closeModal();
};
// add modal
function addBgModal() {
    const bgModal = document.getElementById('bg-modal');
    bgModal.classList.add('active');
    bgModal.addEventListener('click', function() {
        closeModal();
    });
};
// close modal
function closeModal() {
    const closeModal = document.querySelector('.modal-close');
    closeModal.addEventListener('click', function() {
        const bgModal = document.getElementById('bg-modal');
        bgModal.classList.remove('active');
    });
};
function showImage(el) {
    const modalImg = document.getElementById('modal-img');
    modalImg.src = el.firstElementChild.src;
};

