class User {
    private name: string
    username: string
    password: string
    constructor(name: string, username: string, password: string) {
        this.name = name
        this.username = username
        this.password = password
    }
    login(username: string, password: string) {
        if (username === this.username && password === this.password) {
            console.log('User Login Successfully');
            
        } else {
            console.log('User Authentication Failed');
            
        }
    }
    setPassword(newPassword: string) {
        let isValid = false
        isValid = this.validateUorP(newPassword)
        if (isValid) {
            this.password = newPassword
        } else {
            console.log('Password length must be at least 6 character');
            
        }
    }
    validateUorP(text: string): boolean {
        if (text.length > 5) {
            return true
        }
        return false
    }
}
let user = new User('Duong', 'phanhuyduong2003', '123456')
user.login('phanhuyduong2003', '123456')
user.setPassword('1234')
class Author extends User {
    numOfPost: number
    email: string
    constructor(name: string, usename: string, password: string, email: string) {
        super(name, usename, password)
        this.numOfPost = 0
        this.email = email
    }
    login(username: string, password: string) {
        if (username === this.username && password === this.password) {
            console.log('Author Login Successfully');
        } else {
            console.log('Author Login Failed');
        }
    }
    createPost() {
        this.numOfPost++
    }
    getNumOfPost() {
        return this.numOfPost
    }
}
let author = new Author('Athony', 'athony123', '123456', 'athony.dev@gmail.com')
console.log(author.email);
author.login('athony123', '123456')