
export function Nav() {
    
    const d = document
    $menu = d.createElement('nav')

    $styles = document.getElementById('dymamic-styles')

    $styles.innerHTML = `
    .nav {
        background-color: ##616161;
    }
    `
    
    $menu.innerHTML = `
        <nav class="nav">
            <div>
                <h4>EXERCISES CALCULATOR NAV 1</h4>
            </div>
            <div>
                <ul><a>Inicio</a></ul>
                <ul><a>Calculator 01</a></ul>
            </div>
        </nav>
    `

    return $menu

}