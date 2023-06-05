

class GeometricFigure {
    constructor () {

    }

    getArea () {
        return 0;
    }

    toSting () {
        return Object.getPrototypeOf(this).constructor.name;
    }
}