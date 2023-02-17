class Button {
    _text = ''

    constructor(text) {
        this._text = text
    }

    get text() {
        return this._text
    }

    /* set text(value) {
        this._text = value
    } */

    onBtnClick() {
        console.log('clicked')
    }

    getMainTemplate() {
        const btn = document.createElement('button')
        btn.classList.add('btn')
        return btn
    }

    getTemplate() {
        const btn = this.getMainTemplate()
        btn.innerHTML = this.text
        btn.addEventListener('click', () => {
            this.onBtnClick()
        })

        return btn
    }
}

