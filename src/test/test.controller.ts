import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private service: TestService){}

    @Get(':id')
    acao(@Param('id')id) {
        console.log(id);
        return this.service.metodo1();
    }
}
