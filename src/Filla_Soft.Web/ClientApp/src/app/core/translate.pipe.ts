import { PipeTransform, Pipe, Injectable } from '@angular/core';
// import { AppService } from './app.service';
@Injectable()
@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    // constructor(private appService: AppService) { }
    // transform(query: string): any {
    //     return this.appService.appData.content[query] || query;
    // }
}
