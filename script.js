// class HTML {
//     static get(selector) {
//         return document.querySelector(selector)
//     }
//     static draw(selector) {
//         document.querySelector('.show') && document.querySelector('.show').classList.remove('show')
//         this.get(selector).classList.add('show')
//     }
//     static onClick(selector, func) {     
//         this.get(selector).addEventListener('click', func)
//     }
//     static onSubmit(selector, func) {     
//         this.get(selector).addEventListener('submit', func)
//     }
// }

// class Application {
//     constructor() {
//         this.user = {};
//         this.usersData = []
//         this.registration = this.registration.bind(this)
//         this.auth = this.auth.bind(this)
//     }
//     registration(event) {
//         event.preventDefault()
//         this.user = {
//             email: event.currentTarget[0].value,
//             pass: event.currentTarget[1].value,
//             repeat: event.currentTarget[2].value
//         }
//         if(this.user.pass !== this.user.repeat) {
//             alert('Passwords are not equal')
//         } else {
//             event.currentTarget[0].value = event.currentTarget[1].value = event.currentTarget[2].value = ''
//             this.usersData.push(this.user)
//             alert('You are in the system now)')
//             HTML.draw('.auth_page')
//             console.log(this.usersData)
//         }
//     }
//     auth(event) {
//         event.preventDefault()
//         //вызвана через eventListener, то this - это объект на который нажали
//         this.user = {
//             email: event.currentTarget[0].value,
//             pass: event.currentTarget[1].value,
//         }
//         const currentUser = this.usersData.find(user => user.email === this.user.email)
//         if(currentUser.pass === this.user.pass) {
//             alert('you are logged in')
//         } else {
//             alert('incorrect password')
//         }
//     }
//     init() {
//         HTML.draw('.main_page')
//         HTML.onClick('.registration_button', () => {
//             HTML.draw('.registration_page')
//         })
//         HTML.onClick('.auth_button', () => {
//             HTML.draw('.auth_page')
//         })
//         HTML.onClick('.go-to-main-page', () => {
//             HTML.draw('.main_page')
//         })
//         HTML.onSubmit('.registration_page', this.registration)
//         HTML.onSubmit('.auth_page', this.auth)
//     }
// }

// const app = new Application('Petya')
// const app2 = new Application('Vasya')

// app.init()






class User {
    constructor (data) {
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
console.log(user.get());
user.edit(newData);
console.log(user.get());