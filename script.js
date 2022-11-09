class User{
    #firstname;
    #lastname;
    #useraddres;
    #mybook;
    constructor(firstname, lastname, useraddres){
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#useraddres=useraddres;
        this.#mybook=[];
    }
    //   מאפשר גישה חיצונית לשם משתמש
    fullname(){
        return `${this.#firstname} ${this.#lastname}`;
    }

    addborrowbook(book){
       this.#mybook.push(book);
       return this.#mybook;
    }
    borrowreport(){
        console.log(`The list of books I borrowed: ${this.mybook.join(' , ')}`)
    }
}
// הגדרת משתמש
let user1 =new User('uri','bloy', 'kiryat malachi');
let user2 =new User('abraham','avinu', 'beer sheva');
let user3 =new User('david','king', 'jerusalem');

// הגדרת ספרים
let book1 = `Journey to the Center of the Earth`;
let book2 = `Around the World in Eighty Days`;
let book3 = `Harry Potter and the Philosopher's Stone`;
let book4 = `Harry Potter and the Goblet of Fire`;

// הוספה למערך ספרים של המשתמשים
user1.addborrowbook(book1); 
user1.addborrowbook(book2);
user1.addborrowbook(book4); 
user2.addborrowbook(book1);
user2.addborrowbook(book3); 
user3.addborrowbook(book2);
user3.addborrowbook(book4);
//  console.log(user1);
// console.log(user1.borrowreport()); // הדפסת דוח ספרים של המשתמש

// ******************************************* //

class Report {
    constructor(name){
        this.name=name;
        this.users=[];
    }
    addnewuser(user){
        this.users.push(user);
    }
    printreport(){
        this.users.forEach(user=>{
            console.log(user.fullname() +', borrow the books: '+user.addborrowbook());
        });
    }
}

let januarReport = new Report('januarReport');
januarReport.addnewuser(user1);
januarReport.addnewuser(user2);
januarReport.addnewuser(user3);


// console.log(januarReport);
januarReport.printreport();

