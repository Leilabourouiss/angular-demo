import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number|string {
    
    const hours= Math.floor(value/ 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconde = Math.floor(value %3600 %60);

    return `${hours <= 9? `0${hours}`: hours}: ${minutes<=9? `0${minutes}`: minutes}: ${seconde<=9? `0${seconde}`: seconde}` ;
    // si  hours est plus petit ou égal à neuf alors écrire0+h

  }

}
