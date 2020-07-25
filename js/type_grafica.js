const fomrAddTypeGrafica = document.getElementById('formAddTypeGrafica');
const fomrEditTypeGrafica = document.getElementById('formEditTypeGrafica');
const fomrDeleteTypeGrafica = document.getElementById('formDeleteTypeGrafica');

fomrAddTypeGrafica.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Agregando type grafica')
})

fomrEditTypeGrafica.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Guardando cambios')
})

fomrDeleteTypeGrafica.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Elimando definitivamente')
})


$('.tablaTypeGrafica').on('click', '.btnEdit', () => {
    alert('Editando type grafica (peticion de datos )')
})

$('.tablaTypeGrafica').on('click', '.btnDelete', () => {
    alert('Eliminando type grafica (obtenemos id)')
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