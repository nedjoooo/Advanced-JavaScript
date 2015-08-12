var Shapes = (function() {
    var point2D = (function() {
        function point2D(x, y) {
            this._x = x;
            this._y = y;
        };

        point2D.prototype.getX = function() {
            return this._x;
        };

        point2D.prototype.getY = function() {
            return this._y;
        };

        return point2D;
    })();

    var shape = (function() {
        function shape(x, y, color) {
            this._point = new point2D(x, y);
            this._color = color;
        }

        shape.prototype.toString = function() {
            var result = this.constructor.name +
                ": " +
                "Point X: " + this._point._x + "; " +
                "Point Y: " + this._point._y + "; " +
                "Color: " + this._color + "; ";

            return result;
        };

        return shape;
    })();

    var circle = (function() {
        function circle(x, y, radius, color ) {
            shape.call(this, x, y, color);
            this._radius = radius;
        };

        circle.prototype.getRadius = function() {
            return this._radius;
        };

        circle.prototype.toString = function() {
            var result = shape.prototype.toString.call(this) +
                "Radius: " + this.getRadius();

            return result;
        };

        return circle;
    })();

    var rectangle = (function() {
        function rectangle(x, y, width, height, color) {
            shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        rectangle.prototype.getWidth = function() {
            return this._width;
        };

        rectangle.prototype.getHeight = function() {
            return this._height;
        };

        rectangle.prototype.toString = function() {
            var result = shape.prototype.toString.call(this) +
                "Width: " + this.getWidth() + "; " +
                "Height: " + this.getHeight();

            return result;
        };

        return rectangle;
    })();

    var triangle = (function() {
        function triangle(x1, y1, x2, y2, x3, y3, color) {
            shape.call(this, x1, y1, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        triangle.prototype.getPoint1 = function() {
            var result =
                "Point X1: " + this._point.getX() + "; " +
                "Point Y1: " + this._point.getX() + "; ";

            return result;
        };

        triangle.prototype.getPoint2 = function() {
            var result =
                "Point X2: " + this._x2 + "; " +
                "Point Y2: " + this._y2 + "; ";

            return result;
        };

        triangle.prototype.getPoint3 = function() {
            var result =
                "Point X3: " + this._x3 + "; " +
                "Point Y3: " + this._y3 + "; ";

            return result;
        };

        triangle.prototype.toString = function() {
            var result =
                this.constructor.name + ': ' +
                this.getPoint1() +
                this.getPoint2() +
                this.getPoint3() +
                'Color: ' + this._color + ';';

            return result;
        }

        return triangle;
    })();

    var line = (function() {
        function line(x1, y1, x2, y2, color) {
            shape.call(this, x1, y1, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        line.prototype.toString = function() {
            var result =
                this.constructor.name + ': ' +
                "Point X1: " + this._point.getX() + "; " +
                "Point Y1: " + this._point.getX() + "; " +
                "Point X2: " + this._x2 + "; " +
                "Point Y2: " + this._y2 + "; " +
                'Color: ' + this._color + ';';

            return result;
        };

        return line;
    })();

    var segment = (function() {
        function segment(x1, y1, x2, y2, color) {
            line.call(this, x1, y1, x2, y2, color);
        }

        segment.prototype.toString = function() {
            var result = line.prototype.toString.call(this);

            return result;
        }

        return segment;
    })();

    return {
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    }
})();

var circle = new Shapes.circle(2, 2, 3, 'A0A0A0');
console.log(circle.toString());

var rectangle = new Shapes.rectangle(1, 1, 4, 5, 'F1F1F1');
console.log(rectangle.toString());

var triangle = new Shapes.triangle(1, 1, 2, 2, 3, 3, 'B5B5B5');
console.log(triangle.toString());

var line = new Shapes.line(5, 5, 6, 6, 'C2C2C2');
console.log(line.toString());

var segment = new Shapes.segment(3, 3, 8, 8, 'D2D2D2');
console.log(segment.toString());