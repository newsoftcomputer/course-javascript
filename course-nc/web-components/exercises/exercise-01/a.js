
class A extends customElements {

    constructor() {
        super()
    }

    connectedCallback() {
        this.innertHTML = `
            <a></a>
        `
    }
}

customElements.define('A', A)