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
        this.init()
    }

    init() {
        const placeToRender = document.querySelector('header')

        if (placeToRender) {

            const block = document.createElement('div')

            const list = document.createElement('div')

            list.classList.add('cart_list')

            block.classList.add('cart')

            block.appendChild(list)

            const ButtonInstance = new Button('Корзина', () => {
                list.classList.toggle('shown')
            })

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
            block.classList.add('goods-item')
            block.innerHTML = `
            <div class='img'>
            <img src="img/woocommerce-placeholder.png">
            </div>
            <div class='meta'>
            <div class='meta__row'>
            <span class ="key">Товар:</span>
            <span class ="value">${this.name}</span>
            </div>
            <div class='meta__row'>
            <span class ="key">Цена:</span>
            <span class ="value">${this.price}</span>
            </div>
            </div>
            `


            placeToRender.appendChild(block)
        }
    }
}

const ListInstance = new List

const CartInstance = new Cart


