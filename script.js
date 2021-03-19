class Contacts {
    constructor () {
        this.users = [];
    }
    add (user) {
       this.users.push(user);
       console.log(this.users);
    }
    editUser (id, obj) {
        this.users = this.users.map(item => {
            if( item.id === id) {
                return item = obj;
            }
            return item;
        });
    }
    remove (id) {
        this.users = this.users.filter(item => item.id !== id);
        console.log(this.users);
    }
    getContacts () {
        return this.users;
    }
}


class User extends Contacts {
    constructor (data) {
        super();
        this.data = data;
    }
    edit (obj) {
        this.data = {
            id: obj.id,
            name: obj.name, 
            email: obj.email, 
            adress: obj.adress,
            phone: obj.phone
        }
    }
    get () {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    constructor () {
        super();
    }
    init () {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.classList.add('contacts');
    }
}



const data = {
    id: 1,
    name: 'Masha',
    email: '352@mail.ru',
    adress: 'Petrovskogo, 42',
    phone: '650092'
}

const user = new User(data);

const newData = {
    id: 5,
    name: 'Misha',
    email: '35212@mail.ru',
    adress: 'Petrovskogo, 50',
    phone: '6500921123'
};

const newDataTest = {
    id: 5,
    name: 'Missdfha',
    email: '3521sdf2@mail.ru',
    adress: 'Petrosfdvskogo, 50',
    phone: '650044921123'
};

const newDataTest2 = {
    id: 18,
    name: 'Pitro',
    email: '3521sdf2@mail.ru',
    adress: 'Petrosfdvskogo, 50',
    phone: '650044921123'
};


const newDataTest3 = {
    id: 19,
    name: 'Dasha',
    email: '3521sdf2@mail.ru',
    adress: 'Petrosfdvskogo, 50',
    phone: '650044921123'
};


console.log(user.get());
user.edit(newData);
user.add(newData);
user.editUser(5, newDataTest);

user.add(newDataTest2);
user.add(newDataTest3);
user.remove(19);

const contacts = user.getContacts();
console.log(contacts, 'contacts');

const newApp = new ContactsApp();

newApp.init();