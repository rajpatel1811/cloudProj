
const modalWrapper = document.querySelector('.modal-wrapper');
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');
const btnAdd = document.querySelector('.btn-add');

const tableUsers=document.querySelector('.table-users');




btnAdd.addEventListener('click', () => {
    addModal.classList.add('modal-show');
});


window.addEventListener('click', e => {
    if(e.target === addModal) {
      addModal.classList.remove('modal-show');
    }
    if(e.target==editModal){
       editModal.classList.remove('modal-show');
    }
});

