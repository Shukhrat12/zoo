import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello() {
        return "MEOW TO HOME PAGE"
    }

    public greet() {
        return "MY name is Tom!"
    }
}
