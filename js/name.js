var config = {
    authDomain: "https://gerardsteve.wilddog.com",
    syncURL: "https://gerardsteve.wilddogio.com"
};
wilddog.initializeApp(config);
//var name = wilddog.sync().ref();
var nameTwo = new Array();
var nameThree = new Array();
var nameFour = new Array();
for (var i = 0; i < 588; i++) {
    wilddog.sync().ref().once("value")
        .then(function(snapshot) {
            var a = snapshot.child("/2/" + i).val();
            console.log(a);
        });
}