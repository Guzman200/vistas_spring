const formAddTypeCard = document.getElementById('formAddTypeCard');
const formEditTypeCard = document.getElementById('formAEditTypeCard');
const formDeleteTypeCard = document.getElementById('formDeleteTypeCard');

formAddTypeCard.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Agregando type card')
})

formEditTypeCard.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Guardando cambios ')
})

formDeleteTypeCard.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Eliminand type card definitivamente')
})


$('.tablaTypeCard').on('click', '.btnEdit', () => {
    alert('Editando type card (peticion de datos)')
})

$('.tablaTypeCard').on('click', '.btnDelete', () => {
    alert('Eliminando type card (obtenemos el id)')
})


function initDataTable(){
    
    $(document).ready(function() {
        $("#example1").DataTable({
        "responsive": true,
        "autoWidth": false
        })
    });
        
}

initDataTable();