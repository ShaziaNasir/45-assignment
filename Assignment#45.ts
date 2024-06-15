function car(manufacturer: string, model: string, ...options:string[]) {
    let carData = {
        manufacturer:manufacturer,
        model: model,
        options
    }
   console.log(carData);   
}

car("toyota","alto","black","manual");



