
export function Loader() {

    const $loader = document.createElement('img')
    $loader.src = '../assets/spinner/spinner-01.gif'
    $loader.alt = 'Cargando ...'
    $loader.classList.add('loader')

    return $loader
}