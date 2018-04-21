import { User } from "./user";
import { Person } from "./person";

export class Reader extends User implements Person {
    constructor(public id: number, public name: string, public email: string) {
        super();
    }

    public getName() {
        return this.getName();
    }
}
