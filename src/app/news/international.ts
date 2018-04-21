import { News } from "./news";
import { Topic } from "./topic";

export class International extends News implements Topic {
    constructor(title: string, body: string, topic: string) {
        super(title, body, topic);
    }

    public getTopic() {
        return this.topic;
    }
}
