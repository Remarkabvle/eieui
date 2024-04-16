class Island{
    constructor(name, area, country){
        this.name = name
        this.area = area
        this.country = country
    }

    setName(newName){
        this.name = newName
        return newName
    }
    getName(){
        return this.name
    }
    setArea(newArea){
        this.area = newArea
        return newArea
    }
    getArea(){
        return this.area
    }
    setCountry(newCountry){
        this.country = newCountry
        return newCountry
    }
    getCountry(){
        return this.country
    }
}

let island = new Island("newYork", 5000, "Australia" )

console.log(island.setName("New zerlandya"));
console.log(island.getName());

console.log(island.setArea("5000"));
console.log(island.getArea());

console.log(island.setCountry("brazil"));
console.log(island.getCountry());

