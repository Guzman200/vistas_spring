const formAddTypeTabla = document.getElementById('formAddTypeTabla');
const formEditTypeTabla = document.getElementById('formEditTypeTabla');
const formDeleteTypeTabla = document.getElementById('formDeleteTypeTabla');

formAddTypeTabla.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Agregando type tabla')
})

formEditTypeTabla.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Guardando cambios type tabla')
})

formDeleteTypeTabla.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Elimando definitivamente')
})


$('.tablaTypeTabla').on('click', '.btnEdit', () => {
    alert('Editando type tabla (peticion datos)')
})

$('.tablaTypeTabla').on('click', '.btnDelete', () => {
    alert('Eliminando type tabla (obtenemos el id)')
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