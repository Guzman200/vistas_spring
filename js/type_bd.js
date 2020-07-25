const formAddTypeBD = document.getElementById('formAddTypeBD');
const formEditTypeBD = document.getElementById('formEditTypeBD');
const formDeleteTypeBD = document.getElementById('formDeleteTypeBD');


formAddTypeBD.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Agregando type bd')
})

formEditTypeBD.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Guardando cambios type bd')
})

formDeleteTypeBD.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Eliminando definitivamente type bd')
})


$('.tablaTypeBD').on('click', '.btnEdit', () => {
    alert('Editando type bd (peticion de datos)')
})

$('.tablaTypeBD').on('click', '.btnDelete', () => {
    alert('Eliminando type bd (obtenemos el id)')
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