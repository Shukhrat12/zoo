import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello() {
        return `WOW-WOW TO HOME PAGE`
    }

    public introduce() {
        return "My name is Jerry!"
    }
}
