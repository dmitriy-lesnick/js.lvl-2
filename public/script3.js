let counter = 0

const asyncPlus = (callback) => {
    setTimeout(() => {
        counter++
        callback(counter)
    }, 500)
}

const print = () => {
    console.log(value)
}

const main = () => {
    asyncPlus(print)
}

main()