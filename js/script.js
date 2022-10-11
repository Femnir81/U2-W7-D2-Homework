class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    ageComparison(person) {
        if (this.age > person.age) {
            console.log(`${this.name} è più vecchio di ${person.name}`)
        } else {
            console.log(`${this.name} è più giovane di ${person.name}`)
        }
    }
}

let p1 = new Person("Tizio", 25)
let p2 = new Person("Caio", 30)
let p3 = new Person("Sempronio", 20)

p1.ageComparison(p3)
p3.ageComparison(p2)

class Pagination {
    items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o']
    pageSize = 10
    productList() {
        for (let index = 0; index < this.pageSize; index++) {
            const element = this.items[index];
            document.getElementById('products').innerHTML += `<div class="text-center display-5 my-2">${element}</div>`
    }    
    }
}

let prodotti = new Pagination()

prodotti.productList()