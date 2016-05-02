app.controller("NameController", function () {

    var nc = this;

    nc.getName = function () {
        if (localStorage.getItem('name')) {
            nc.savedName = localStorage.getItem('name');
            nc.meatsackTargetIdentified = true;
        }
        else {
            nc.savedName = "my favorite human"
            nc.meatsackTargetIdentified = false;
        }
    }


    nc.saveName = function (name) {
        console.log(name)
        nc.savedName = name;
        nc.meatsackTargetIdentified = true;
        localStorage.setItem('name', name);
    }

    nc.getName();
})