import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit: number ){
        var limits = (limit) ? limit : 50;
        
        if (value)
            return value.substring(0, limits) + "...";
    }
    
}