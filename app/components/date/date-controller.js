app.controller("DateController", function ($interval) {

    dc = this;
    dc.militaryTime = false;

    dc.getTime = function () {
        dc.date = new Date();
        dc.hours = dc.date.getHours();

        //set greeting
        if (dc.hours >= 6 && dc.hours < 12) {
            dc.greeting = "Morning";
        }
        else if (dc.hours >= 12 && dc.hours < 18) {
            dc.greeting = "Afternoon"
        }
        else {
            dc.greeting = "Evening";
        }

        //toggle to standard time
        if (dc.hours > 12 && !dc.militaryTime) {
            dc.hours = dc.hours - 12;
        }

        dc.minutes = dc.date.getMinutes();
        //display single digit minutes properly
        if (dc.minutes < 10) {
            dc.minutes = "0" + dc.minutes;
        }

    }

    dc.toggleTime = function () {
        if (dc.militaryTime) {
            dc.militaryTime = false;
        }
        else {
            dc.militaryTime = true;
        }
        dc.getTime();
    }

    dc.getTime();
    $interval(dc.getTime, 10000)
})
