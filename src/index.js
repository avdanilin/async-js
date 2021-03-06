/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    seconds = 1000
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds)
    })
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    let townsPromise;

    return townsPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
        xhr.responeType = 'json'

        xhr.addEventListener('load', () => {
            if (xhr.status < 400) {

                resolve((xhr.response).sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }

                    if (a.name < b.name) {
                        return -1
                    }

                    return 0
                }))
            } else {
                reject(error => {
                    throw new Error('Ошибка')
                })
            }
        })

        xhr.send()
    })
}

export {
    delayPromise,
    loadAndSortTowns
};
