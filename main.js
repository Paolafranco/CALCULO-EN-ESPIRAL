
const invertirOracion = oracion => {
    let nuevaOracion = "";
    for (let x = oracion.length - 1; x >= 0; x--) {
        nuevaOracion += oracion[x];
    }
    return nuevaOracion;
}