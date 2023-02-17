class Button {
    _text = ''

    constructor(text) {
        this._text = text
        this._render()
    }

    get text() {
        return this._text
    }

    set text(value) {
        this._text = value
    }

    onBtnClick() {
        console.log('clicked')
    }

    getTemplate() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        return btn
    }

    _render() {
        const placeToRender = document.querySelector('.buttons')
        if (placeToRender) {
            const btn = this.getTemplate()
            btn.innerText = this.text
            placeToRender.appendChild(btn)
            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }
    }
}

class AlertButton extends Button {
    constructor(text) {
        super(text)
    }

    onBtnClick() {
        alert('clicked')
    }
}

class RoundButton extends Button {
    constructor(text) {
        super(text)
    }

    getTemplate() {
        const btn = document.createElement('button')
        btn.classList.add('round')
        return btn
    }

    onBtnClick() {
        console.log('round clicked')
    }

}

new Button('Click me')

const alertButton = new AlertButton('AlERT click')

const roundButton = new RoundButton('round btn')

const btns = [alertButton, roundButton]

btns.forEach(btn => {
    btn._render()
})

