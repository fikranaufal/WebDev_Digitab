var User = /** @class */ (function () {
    function User(username, firstName, lastName, email, birthday) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
    }
    Object.defineProperty(User.prototype, "fullName", {
        // Getter
        // fullName
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        // age
        get: function () {
            return (new Date()).getFullYear() - this.birthday.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("fikranaufal", "Fikran", "Naufal", "fikran.naufal@gmail.com", new Date("2004-07-13"));
// console.log(user1);
// getter dan setter
console.log("Nama lengkap: ".concat(user1.fullName));
console.log("Umur: ".concat(user1.age));
console.log("Email: ".concat(user1.email));
//console.log(`Birthday: ${user1.Birthday}`);
//user1.Birthday = 2000;
console.log("Tahun Birthday terbaru: ".concat(user1.birthday));
console.log(typeof Date);
