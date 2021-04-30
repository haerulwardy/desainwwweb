// menu active
function showPortfolio() {
    const portMenus = document.querySelectorAll('.portfolio-menus');
    portMenus.forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.preventDefault();
            portMenus.forEach(menu => {
                menu.classList.remove('active')
            })
            this.classList.add('active');

            const dataValue = this.getAttribute('data-category');
            const columnPorto = document.querySelectorAll('.col-portfolio');
            columnPorto.forEach(col => {
                if (col.className.includes(dataValue)) {
                    col.classList.remove('empty');
                } else {
                    col.classList.add('empty');
                }
            })
        });
    });
};
showPortfolio();

// portfolio
const columnPorto = document.querySelectorAll('.col-portfolio');
columnPorto.forEach(porto => {
    porto.addEventListener('click', function() {
        // show modal
        showModal();
        // show image
        showImage(this);
        getDataUiFrom(this);
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
function getDataUiFrom(el) {
    const uiFrom = document.getElementById('ui-from');
    uiFrom.innerText = el.lastElementChild.lastElementChild.firstElementChild.innerText;
};