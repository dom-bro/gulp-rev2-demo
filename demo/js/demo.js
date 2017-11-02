'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var Person = function () {
        function Person() {
            _classCallCheck(this, Person);

            this.name = 'xxx';
        }

        _createClass(Person, [{
            key: 'getName',
            value: function getName() {
                return this.name;
            }
        }]);

        return Person;
    }();

    var ua = window.navigator.userAgent.toLowerCase();

    var a = new Person();

    console.log(a.getName());
    $.post('/a', function (res) {
        res = typeof res === 'string' ? JSON.parse(res) : res;
        console.log(res);
    });

    $.get('/a', function (res) {
        res = typeof res === 'string' ? JSON.parse(res) : res;
        console.log(res);
    });

    $.get('/studentMobile/fairyland/growingworld/gethaicurrentweek.vpage', function (res) {
        res = typeof res === 'string' ? JSON.parse(res) : res;
        console.log(res);
    });

    $.get('/studentMobile/fairyland/task/homeworkcorrecttasks.vpage?subject=CHINESE', function (res) {
        res = typeof res === 'string' ? JSON.parse(res) : res;
        // alert(JSON.stringify(res));
        console.log(res);
    });

    $.get('/studentMobile/fairyland/task/homeworkcorrecttasks.vpagenull', function (res) {
        res = typeof res === 'string' ? JSON.parse(res) : res;
        // alert(JSON.stringify(res));
        console.log(res);
    });
})();