class Button {
    _text = ''
    _onclickClb = null

    constructor(text, clb) {
        this._text = text
        this._onclickClb = clb

    }

    get text() {
        return this._text
    }

    set text(value) {
        this._text = value
    }

    onBtnClick() {
        console.log('clicked')
        if (typeof this._onclickClb === 'function') {
            this._onclickClb()
        }
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

