.padStart()
.padEnd()

Object.values
Object.entries

let obj = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr.Grinch"
}

//old way

Object.keys(obj).forEach((key) => {
    console.log(obj[key]);
})

//new way

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})