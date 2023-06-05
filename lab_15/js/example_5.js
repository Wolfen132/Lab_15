
let sqr = new Square(5, 6);
console.log(sqr.getArea());

let trg = new Triangle(5, 6, 7);
console.log(trg.getArea());

let cir = new Circle(25);
console.log(cir.getArea());

function handleFigures(figures) {
    let totalArea = 0;

    totalArea = figures.reduce((acc, fig) => acc + fig.getArea(), 0);

    for (let i = 0; i < figures.length; i++) {
        const figure = figures[i];
        const figureName = figure.constructor.name;
        const figureArea = figure.getArea();

        console.log(`${figureName}: площа = ${figureArea}`);

        totalArea += figureArea;
    }

    console.log(`Загальна площа всіх фігур: ${totalArea}`);
}

handleFigures([sqr, trg, cir])