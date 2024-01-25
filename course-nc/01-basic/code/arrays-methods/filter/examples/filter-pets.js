
const mascotas = [
    { animal: 'Perro', nombre: 'Puchini', edad: 6, raza: 'Gran danes' },
    { animal: 'Cerdo', nombre: 'Chanchito feliz', edad: 3, raza: 'Mini pig' },
    { animal: 'Perro', nombre: 'Pulga', edad: 4, raza: 'Chiguaga' },
    { animal: 'Loro', nombre: 'Pelusa', edad: 2, raza: 'Silvestre' },
];

console.log(`Todos los arreglos ${mascotas}`);


// Filtrar mascotas que sean solo perros
const mascotasFiltradosAnimales = mascotas.filter( x => x.animal === 'Perro' );

console.log('Todas las mascotas :', mascotas);
console.log('Mascotas que son perros :', mascotasFiltradosAnimales);

