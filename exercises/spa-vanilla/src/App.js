
import { Nav } from './components/Nav.js'
import { Header } from './components/Header.js'
import { Loader } from './components/Loader.js'

export function App() {

    const d = document,

    $root = d.getElementById('root')

    $root.appendChild(Nav())
    $root.appendChild(Header())
    $root.appendChild(Loader())

    /*
    document.getElementById('root').innerHTML = `
        <h1> Hola /h1>
    `
    */

}