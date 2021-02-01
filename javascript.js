$(document).ready(iniciarEventos);
function iniciarEventos(){
    $('#diez').click(serviceDiez);
    $('#treinta').click(serviceTreinta);
    $('#cincuenta').click(serviceCincuenta);
    $('#ochenta').click(serviceOchenta);
};
function serviceDiez(){
    Swal.fire({
        title: 'Service 10K',
        html: '<table border="2px" class="salida-costos"><tr><td>Cronos</td><td>$5455.05</td></tr><tr><td>Etios</td><td>$4414.16</td><tr><td>Joy<td>$5674</td></tr><tr><td>Voyage</td><td>$5186</td></tr><tr><td>Logan</td><td>$2494.70</td></tr></table><br><p>DETALLES</p><ul class="lista-salida"><li>Cambio de aceite(recomendado por la fábrica) </li><li>Filtro de aire</li>Filtro de aceite</li><li>Filtro de nafta</li></ul>',
        padding: '1rem',
        grow:'fullscreen'
    });
};
function serviceTreinta(){
    Swal.fire({
        title: 'Service 30K',
        html: '<table border="2px" class="salida-costos"><tr><td>Cronos</td><td>$11699.03</td></tr><tr><td>Etios</td><td>$10658.41</td><tr><td>Joy<td>$13927.59</td></tr><tr><td>Voyage</td><td>$11966.13</td></tr><tr><td>Logan</td><td>$8153.79</td></tr></table><br><p>DETALLES</p><ul class="lista-salida"><li>Cambio de aceite(recomendado por la fábrica) </li><li>Filtro de aire</li>Filtro de aceite</li><li>Filtro de nafta</li><li>Filtro antipolen</li><li>Bujías y cables</li><li>Pastillas de freno</li></ul>',
        padding: '1rem',
        grow:'fullscreen'
    });
};
function serviceCincuenta(){
    Swal.fire({
        title: 'Service 50K',
        html: '<table border="2px" class="salida-costos"><tr><td>*Cronos</td><td>$5455.05</td></tr><tr><td>*Etios</td><td>4414.16</td><tr><td>Joy<td>$8324</td></tr><tr><td>Voyage</td><td>$9535</td></tr><tr><td>Logan</td><td>$4084</td></tr></table><br><p>DETALLES</p><ul class="lista-salida"><li>Cambio de aceite(recomendado por la fábrica) </li><li>Filtro de aire</li>Filtro de aceite</li><li>Filtro de nafta</li><li>Correa dentada y tensor</li></ul>',
        padding: '1rem',
        grow:'fullscreen',
        footer: 'No lleva correa dentada'
    });
};
function serviceOchenta(){
    Swal.fire({
        title: 'Service 80K',
        html: '<table border="2px" class="salida-costos"><tr><td>Cronos</td><td>$34811.03</td></tr><tr><td>Etios</td><td>$33800.41</td><tr><td>Joy<td>$35681.51</td></tr><tr><td>Voyage</td><td>$30714</td></tr><tr><td>Logan</td><td>$24913.75</td></tr></table><br><p>DETALLES</p><ul class="lista-salida"><li>Cambio de aceite(recomendado por la fábrica) </li><li>Filtro de aire</li>Filtro de aceite</li><li>Filtro de nafta</li><li>Filtro antipolen</li><li>Pastillas de frenos</li><li>Bujías y cables</li><li>Dos cubiertas</li><li>Correa del alternador</li></ul>',
        padding: '1rem',
        grow:'fullscreen'
    });
};