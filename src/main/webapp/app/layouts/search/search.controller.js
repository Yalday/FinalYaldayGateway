(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', '$state', 'SearchService'];

    function SearchController ($scope, $state, SearchService) {
        var vm = this;

        vm.goSearch = goSearch;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.date = new Date();  
        vm.checkClick = checkClick;
        vm.popOpen = popOpen;
        vm.popClose = popClose;
        vm.datePickerOpenStatus.bookingDate = false;
        vm.popoverTemplate='app/layouts/search/people-popover.html';
        vm.popIsOpen = false;
        vm.adults = 0;
        vm.child = 0;
       
        vm.addAdult = addAdult;
        vm.removeAdult = removeAdult;
        vm.addChild = addChild;
        vm.removeChild = removeChild;
        vm.printTotal = printTotal; 
        console.log("vars:"+vm.adults+" : "+vm.child);

        vm.searchppl = {    
                            total : 0,
                            text :'How many people?',
                            children : vm.child,
                            adults : vm.adults
                        };

        function popOpen() {
            vm.popIsOpen = true;
            console.log("clicked to open!");
        }

        function popClose() {
            printTotal();
            vm.popIsOpen = false;
            console.log("clicked to close!");
        }
 
        function checkClick () {
            console.log("clicked the text box");
        }

        function openCalendar (date) {
            console.log("open the damn calendar!!");
            vm.datePickerOpenStatus[date] = true;
        }

        function goSearch() {
            console.log("hello world");
            console.log("before current state is :" + $state.current.name);
             $state.go('search');
            console.log("after current state is :" + $state.current.name);
            vm.searchtext = '';
        }

        function hasSearched() {}

        function addAdult() {

            if (vm.adults < 10 ) {
                vm.adults++;
            }
            console.log("valueA:" + vm.adults);
        }

        function removeAdult() {

            if (vm.adults > 0 ) {
                vm.adults--;
            }
            console.log("valueA:" + vm.adults);
        }

        function addChild() {

            if (vm.child < 10 ) {
                vm.child++;
            }
            console.log("valueC:" + vm.child);
        }

        function removeChild() {

            if (vm.child > 0 ) {
                vm.child--;
            }
            console.log("valueC:" + vm.child);
        }

        function printTotal() {
            vm.searchppl.total=vm.child + vm.adults;

            if (vm.adults === 0) {
                vm.searchppl.text="No adults";
            } else if (vm.adults === 1) {
                vm.searchppl.text="1 adult";
            } else {
                vm.searchppl.text=vm.adults + " adults";
            }

            if (vm.child === 0) {
                vm.searchppl.text=vm.searchppl.text + ", No children";
            } else if (vm.child === 1) {
                vm.searchppl.text=vm.searchppl.text + ", 1 child";
            } else {
                vm.searchppl.text=vm.searchppl.text + ", " + vm.child + "children";
            }
            console.log("text:" + vm.searchppl.text);
            console.log("total:" + vm.searchppl.total + "(adults: "+vm.adults+" : children: "+vm.child);

        }  

    }
})();