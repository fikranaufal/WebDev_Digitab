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
    Object.defineProperty(User.prototype, "Birthday", {
        // Setter
        // birthday
        set: function (birthday) {
            if (birthday >= 2003) {
                console.error;
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user1 = new User("fikranaufal", "Fikran", "Naufal", "fikran.naufal@gmail.com", new Date("2004-07-13"));
console.log(user1);
