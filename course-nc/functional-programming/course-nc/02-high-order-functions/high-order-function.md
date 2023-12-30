
# HIGHT ORDER FUNCTIONS / FUNCIONES DE ORDEN SUPERIOR

    - Las funciones de orden superior es una funcion que toma otra como parametro o que retorna otra funcion

    - Funciones de orden superior de javascript

        - filter
        - Map
        - Reduce
        - etc

    - Podemos crear nuestras propias funciones de orden superior

        Ejemplo

        // Ejemplo calificador Adjetivo Sustantivo
        
        function crearCalificador (adjetivo) {
            return function (sustantivo) {
                return `${adjetivo} ${sustantivo}`
            }
        }

        let qualitySuper = crearCalificador('super')

        let friend = qualitySuper('amigo')
        console.log(friend)

        let pianoMen = qualitySuper('pianista')
        console.log(pianoMen)



