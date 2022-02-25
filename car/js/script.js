/* 2. Создайте класс Cars. Класс должен содержать атрибуты: марка авто, год выпуска, мощность двигателя, цвет машины. Добавьте методы, которые будут выводить атрибуты. Создайте класс ElectroCars, который наследует все свойства от класса Cars. У электромобилей должен быть дополнительный атрибут объем аккумулятора. Также у них должен быть дополнительный метод promote() который должен выводить сообщение с рекламой покупки электромобиля.  */

class Cars {
    constructor(brand, year, enginePower, color) {
        this.brand = brand;
        this.year = year;
        this.enginePower = enginePower;
        this.color = color;
    }
    aboutCar() {
        return `Car brand:
        ${this.brand}
        Year of issue: ${this.year} 
        Engine power: ${this.enginePower} 
        Color: ${this.color}`
    }
}

class ElectroCars extends Cars {
    constructor(brand, year, enginePower, color, batteryVolume) {
        super(brand, year, enginePower, color);
        this.batteryVolume = batteryVolume;
    }

    aboutCar() {
      return super.aboutCar() + '\n' + `Battery: ${this.batteryVolume}` ;  
    }

    promote() {
        return `Buy this electro car ${this.brand} with battery volume ${this.batteryVolume}`
    }
}

const porscheCayenne = new Cars("Porsche Cayenne", 2019, 3.9, "black");

console.log( porscheCayenne.aboutCar());

const hyundaiElectric = new ElectroCars("Hyundai Kona Electric", 2020, 26, "white", 2000)

console.log(hyundaiElectric.aboutCar());
console.log(hyundaiElectric.promote());

