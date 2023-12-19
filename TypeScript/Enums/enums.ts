// * -------------------
// * Enums in TS
// * -------------------

//? Enums in TypeScript are commonly used when you want to represent a set of related values and
// choose one value from multiple options. Enums provide a convenient way to define a set of named
// values and associate them with specific meanings.

//* In TypeScript, when enum constants are not explicitly assigned numeric values, they are 
// they are automatically assigned incremental numeric values starting from 0. The default numeric
// value for the first enum constant is 0, and subsequent enum constans receive values 
// incremented by 1.

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name: string;
    email: string;
    password: string;
    role: Roles;
}

const user1: LoginDetails = {
    name: "user1",
    email: "user1@gmail.com",
    password: "12345",
    role: Roles.user,
}

const user2: LoginDetails = {
    name: "user2",
    email: "user2@gmail.com",
    password: "123456",
    role: Roles.admin,
}

const isAdmin = (user: LoginDetails) => {
    const { name, role } = user;
    return role === 'admin' ? `${name} is allowed to edit the website` 
    : `${name} is not allowed to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
