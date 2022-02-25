    /* 1. Продолжите работу с классом ресторана, созданного во время урока.   Добавьте классу атрибут served со значением 0.
    Добавьте метод serve(). Каждый вызов метода serve() должен увеличивать атрибут served на 1 единицу.
    Также добавьте метод setServed(), позволяющий задавать любое количество обслуженных посетителей.
    В конце добавьте метод showTotalServed(), позволяющий выводить общее количество обслуженных посетителей. */


class Restaurant {
    constructor(name, cusineType) {
        this.name = name;
        this.cusineType = cusineType;
        this.served = 0;
    }

    showInfo() {
        return `${this.name} is a restaurant of ${this.cusineType} meal`;
    }

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();

        if (currentDay === 0 || currentDay === 6) {
            return `${this.name} is closed.`;
        } else {
          if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is open.`;
            } else {
                return `${this.name} is closed.`;
            }
        }           
    }

    serve() {
        return this.served += 1;
    }

    setServed(numberOfServed){
        return this.served += numberOfServed
    }

    showTotalServed(){
        return `Total served: ${this.served}`
    }
}

const italia = new Restaurant("Mamma Mia", "italian")

console.log(italia.showInfo())
console.log(italia.isOpen())
console.log(italia.serve())
console.log(italia.setServed(10))
console.log(italia.showTotalServed())