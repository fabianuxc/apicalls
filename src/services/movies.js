import data from '../data.json'
export function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 3000)
    })
}

