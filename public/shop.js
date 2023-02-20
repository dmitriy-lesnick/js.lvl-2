class AbstractList {
    items = []

    constructor(item = []) {
        this.item = []
    }

    add() {
        this.items.push()
    }

    remove() {
    }
}


class List extends AbstractList {

    constructor() {
        super()
        let goodsPromise = this.fetchGoods()
        goodsPromise.then(() => {
            this.render()
        })
    }

    fetchGoods() {
        const result = fetch('./public/database.json')
        return result
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.items = data.data.map((cur) => {
                    return new GoodsItem(cur)
                })
            })
    }

    render() {
        this.items.forEach(goods => {
            goods.render()
        })
    }


}



class Cart extends AbstractList {

    constructor() {
        super()
        this.init
    }

    init() {
        const placeToRender = document.querySelector('header')

        if (placeToRender) {

            const block = document.createElement('div')

            block.classList.add('cart')

            const ButtonInstance = new Button('Корзина')

            block.appendChild(ButtonInstance.getTemplate())

            placeToRender.appendChild(block)
        }

    }
}


class GoodsItem {
    name = ''
    price = 0

    constructor({ name, price }) {
        this.name = name
        this.price = price
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerText = `Товар: ${this.name} = ${this.price}`
            placeToRender.appendChild(block)
        }
    }
}

const ListInstance = new List

const CartInstance = new Cart


