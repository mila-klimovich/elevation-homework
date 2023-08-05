import validator from "validator";
import { faker } from "@faker-js/faker";

console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("786-329-9958", "en-US"));

let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let text = "I'M SO EXCITED!!!~!";

let cleanedText = validator.blacklist(text, blacklist).toLowerCase();

console.log(cleanedText);

function makeHuman() {
    return {
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        // companyname: faker.datatype.companyname(),
    };
}

const USERS = faker.helpers.multiple(makeHuman, {
    count: 2,
});

console.log(USERS);
