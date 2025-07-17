//Day 3: classes & oop
interface User {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
}

class User {
    // Properties
    public username: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public birthday: Date;

    constructor(username: string, firstName: string, lastName:string, email:string, birthday:Date) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
    }

    // Getter
    // fullName
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
    // age
    get age() {
        return (new Date()).getFullYear() - this.birthday.getFullYear();
    }

    // Setter
    // birthday
    set baruBirthday(birthday: number) {
        if (birthday >= 2003) {
            throw new Error("Umur minimal 22 tahun");
        } else {
            console.log(this.birthday);
        }
    }
}

const user1 = new User(
    "fikranaufal",
    "Fikran",
    "Naufal",
    "fikran.naufal@gmail.com",
    new Date("2004-07-13"),
)

// console.log(user1);

// getter dan setter
console.log(`Nama lengkap: ${user1.fullName}`);
console.log(`Umur: ${user1.age}`);
console.log(`Email: ${user1.email}`);
//console.log(`Birthday: ${user1.Birthday}`);
//user1.Birthday = 2000;
console.log(`Tahun Birthday terbaru: ${user1.birthday}`);
//console.log(typeof Date);