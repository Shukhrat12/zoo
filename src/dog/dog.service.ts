import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return `WOW-WOW TO HOME PAGE`
    }

    public introduce(): string {
        return "My name is Jerry!"
    }

    public modifyDetail(): string {
        return 'successfully modified'
    }
}
