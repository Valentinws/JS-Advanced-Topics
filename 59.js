let user1 = {
    name: "John",
    workplaces: [
        {
            companyName: "Google",
            address: "Google Street no. 1"
        },
        {
            companyName: "Facebook",
            address: "Facebook Street no. 10",
            position: "Developer"
        }
    ]
}

let user2 = {
    name: "John",
    workplaces: [
        {
            companyName: "Google",
            address: "Google Street no. 1"
        },
        {
            companyName: "Facebook",
            address: "Facebook Street no. 10",
            position: "Developer"
        }
    ]
}

function isEqual(obj1, obj2) {
    if (JSON.stringify(user1) == JSON.stringify(user2)) console.log('equal');
}

isEqual(user1, user2);





// Initial ex
// var user1 = { name: "nerd", org: "dev" };
// var user2 = { name: "nerd", org: "dev" };
// var eq = user1.name == user2.name && user1.org == user2.org;

// console.log(eq)