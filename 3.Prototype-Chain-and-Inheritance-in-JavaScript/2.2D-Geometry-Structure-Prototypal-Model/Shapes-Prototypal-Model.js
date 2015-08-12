var Shapes = (function() {
    Object.prototype.extends = function (properties) {
        function f() {};
        var prop;
        f.prototype = Object.create(this);
        for (prop in properties) {
            f.prototype[prop] = properties[prop];
        };
        f.prototype._super = this;
        return new f();
    };

    var shape = {
        init: function init(x1, y1, color) {
            this.x1 = x1;
            this.y1 = y1;
            this.color = color;
            return this;
        },

        getPoint: function getPoint() {
            var result = '[' + this.x1 + ', ' + this.y1 + ']';
            return result;
        },

        getColor: function getColor() {
            return 'Color: ' + this.color;
        }
    }

    var circle = shape.extends({
        init: function init(x, y, radius, color) {
            this._super.init(x, y, color);
            this.radius = radius;
            return this;
        },

        introduce: function introduce() {
            var result =
                'Circle: ' +
                'Point: ' + this._super.getPoint() +
                ', ' + this._super.getColor();
            return result;
        }
    });

    var rectangle = shape.extends({
        init: function init(x1, y1, width, height, color) {
            this._super.init(x1, y1, color);
            this.width = width;
            this.height = height;
            return this;
        },

        introduce: function introduce() {
            var result =
                'Rectangle: ' +
                'Point: ' + this._super.getPoint() +
                ', Width: ' + this.width +
                ', Height: ' + this.height +
                ', ' + this._super.getColor();

            return result;
        }
    });

    var triangle = shape.extends({
        init: function init(x1, y1, x2, y2, x3, y3, color) {
            this._super.init(x1, y1, color);
            this.x2 = x2;
            this.y2 = y2;
            this.x3 = x3;
            this.y3 = y3;
            return this;
        },

        introduce: function introduce() {
            var result =
                'Triangle: ' +
                'Point1: ' + this._super.getPoint() + ', ' +
                'Point2: [' + this.x2 + ', ' + this.y2 + ']' + ', ' +
                'Point3: [' + this.x3 + ', ' + this.y3 + ']' +
                ', ' + this._super.getColor();
            return result;
        }
    });

    var line = shape.extends({
        init: function init(x1, y1, x2, y2, color) {
            this._super.init(x1, y1, color);
            this.x2 = x2;
            this.y2 = y2;
            return this;
        },

        introduce: function introduce() {
            var result =
                'Line: ' +
                'Point1: ' + this._super.getPoint() + ', ' +
                'Point2: [' + this.x2 + ', ' + this.y2 + ']' +
                ', ' + this._super.getColor();
            return result;
        },

        getPoints: function getPoints() {
            var result =
                'Point1: ' + this._super.getPoint() + ', ' +
                'Point2: [' + this.x2 + ', ' + this.y2 + ']';
            return result;
        }
    });

    var segment = line.extends({
        init: function init(x1, y1, x2, y2, color) {
            this._super.init(x1, y1, x2, y2, color);
            return this;
        },

        introduce: function introduce() {
            var result =
                'Segment: ' +
                this._super.getPoints() + ', ' +
                this._super.getColor();
            return result;
        }
    })

    return {
        circle: circle,
        line: line,
        segment: segment,
        rectangle: rectangle,
        triangle: triangle
    }
})();

var circle = Object.create(Shapes.circle).init(2, 2, 5, 'A0A0A0');
console.log(circle.introduce());

var rectangle = Object.create(Shapes.rectangle).init(1, 1, 5, 6, 'B1B1B1');
console.log(rectangle.introduce());

var triangle = Object.create(Shapes.triangle).init(1, 1, 2, 2, 3, 3, 'C2C2C2');
console.log(triangle.introduce());

var line = Object.create(Shapes.line).init(3, 3, 4, 4, 'D3D3D3');
console.log(line.introduce());

var segment = Object.create(Shapes.segment).init(8, 8, 9, 9, 'E4E4E4');
console.log(segment.introduce());