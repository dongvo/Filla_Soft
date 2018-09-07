import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    public getParentByClassName(el: any, className: string): any {
        let parent = el.parentElement || el.target.parentElement;
        if(parent && parent.nodeName != 'body'){
            if(parent.classList.contains(className) ) return parent;
            return this.getParentByClassName(parent, className);
        }
        else return null;
    }
}