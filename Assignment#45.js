function car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carData = {
        manufacturer: manufacturer,
        model: model,
        options: options
    };
    console.log(carData);
}
car("toyota", "alto", "black", "manual");
/*function car(manufacturer: string, model: string, ...options:string[]) {
    let carData = {
        manufacturer:manufacturer,
        model: model,}
    return car
    
    
    
    let my_car=car("toyota","alto","black","manual");
    console.log(my_car);}*/
