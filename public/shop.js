class List {
    items = []

    constructor() {
        let goodsPromise = this.fetchGoods()
        goodsPromise.then(() => {
            this.render()
        })
    }

    fetchGoods() {
        const result = fetch('http://localhost:3000/database.json')
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


