import { Actor, CollisionType, Color } from "excalibur";

export class Platform extends Actor {
    constructor(x, y){
        super({
            x, y,
            width: 400,
            height: 50,
            color: Color.Purple
        });
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Fixed;
        this.on("collisionstart", (_ => ))
    }
}