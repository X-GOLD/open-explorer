(function() {
    'use strict';

    angular.module('app')
        .factory('appConfig', [appConfig]);


    angular.module('app').config(['AnalyticsProvider', function (AnalyticsProvider) {
        // Add configuration code as desired
        AnalyticsProvider.setAccount('UA-101388661-2');  //UU-XXXXXXX-X should be your tracking code
    }]).run(['Analytics', function(Analytics) { }]);

    function appConfig() {
        var pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];
        var date = new Date();
        var year = date.getFullYear();
        var main = {
            brand: 'Expl0rer',
            name: 'oxarbitrage',
            year: year,
            pageTransition: pageTransitionOpts[0], // 0, 1, 2, 3
        };
        var color = {
            primary:    '#4E7FE1',
            success:    '#81CA80',
            info:       '#6BBCD7',
            infoAlt:    '#7266BD',
            warning:    '#E9C842',
            danger:     '#E96562',
            gray:       '#DCDCDC'
        };

        var urls = {
            websocket: "ws://88.99.145.10:9999",
            python_backend: "http://23.94.69.140:5000",
            elasticsearch_wrapper: "http://185.208.208.184:5000",
            udf_wrapper: "http://23.94.69.140:5001"
        };

        return {
            pageTransitionOpts: pageTransitionOpts,
            main: main,
            color: color,
            urls: urls
        }
    }

})();