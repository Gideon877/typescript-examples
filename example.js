'esversion: 6';
var Example;
(function (Example) {
    class Person {
        constructor(fname, lname, familyName, numberFamilyMembers, maritalStatus, ownHome, totalFamilyIncome) {
            this.fname = fname;
            this.lname = lname;
            this.familyName = familyName;
            this.numberFamilyMembers = numberFamilyMembers;
            this.maritalStatus = maritalStatus;
            this.ownHome = ownHome;
            this.totalFamilyIncome = totalFamilyIncome;
            console.log("Person created");
        }
        get age() {
            return this._age;
        }
        set age(age) {
            this._age = age;
        }
    }
    var thabang = new Person('Thabang', 'Gideon', 'Gideon', 4, 'Single', true, 200000);
    thabang.age = 20;
    console.log(thabang);
})(Example || (Example = {}));
