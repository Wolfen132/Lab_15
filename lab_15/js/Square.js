
class Square extends GeometricFigure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

     getArea() {
       return this.width * this.height;
    }
}