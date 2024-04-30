
export function Nav() {

    const $nav = document.createElement('nav')

    $nav.innerHTML = `
        
        <style>
            .nav{
                display: flex;
                justify-content: space-between;
                background-color: #2979FF;
                padding: .5rem;
            }

            .nav__div-title{
                display: flex;
                align-item: center;
                color: #FFFFFF;
            }

            .nav__div-content{
                display: flex;
                align-item: center;
                color: #FFFFFF;
            }
        </style>

        <nav class="nav">
            <div class="nav__div-title">
                <h4 class="nav__div-title-title">SPA VANILLA</h4>
            </div>

            <div class="nav__div-content">
                <ul><a>Home</a></ul>
                <ul><a>About As</a></ul>
            </div>
        </nav>
    `

    return $nav

}