import { User } from "./user.model";

export class UserServices {

    users: User[] = [
        new User("Brenda Sue", "brenda@gmail.com", "123456", "Administrator"),
        new User("Josh", "josh1@hotmail.com", "9874", "Viewer")
    ]

}