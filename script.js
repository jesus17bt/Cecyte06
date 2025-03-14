// Función para mostrar u ocultar la lista de materiales al hacer clic en un cuadro
function toggleLista(id) {
    const lista = document.getElementById(id);
    
    // Verificar si la lista está visible
    const listas = document.querySelectorAll('.materiales');
    
    listas.forEach(function(item) {
        if (item !== lista) {
            item.classList.remove('mostrar');  // Ocultar otras listas
        }
    });
    
    // Alternar la visibilidad de la lista clickeada
    lista.classList.toggle('mostrar');
}
