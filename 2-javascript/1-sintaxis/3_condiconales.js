// CONDICIONALES //

// - Condicional If - Else
let autorizado = true

if (autorizado) {
    document.write('Bienvenido')
    console.log('Puede Ingresar!')
}
else { alert('No autorizado') }


// - Condicional Switch
let color = 'amarillo'

switch(color){
    case 'verde':
        console.log('Exito')
        break
    case 'amarillo':
        console.log('Advertencia')
        break
    default:
        console.log('Error')
        break
}