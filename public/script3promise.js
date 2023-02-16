/* let counter = 0 */

const asyncPlus = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof counter === 'undefined') {
                reject()
            } else {
                counter++
                resolve(counter)
            }

        }, 500)
    })

}

const print = () => {
    console.log(value)
}

const main = () => {
    asyncPlus()
        .then(print)
        .catch(() => {
            console.log('ERROR!')
        })

}

main()


