class List {
    items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map((cur) => {
            return new GoodsItem(cur)
        })
        this.items.push(...goods)
        this.render()
    }

    fetchGoods() {
        const result = fetch('hhtp://localhost:3000/database.json')
        result
            .then()
            .catch(err => {
                console.warn('Check network', err)
            })

    }

    render() {
        this.items.forEach(good => {
            good.render()
        })
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


