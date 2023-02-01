import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // camelcase pour pipe
  name: 'toTemperature'
})
export class ToTemperature implements PipeTransform {
  // classe doit avoir les propiètés de cette claisse pour qu'elle soit valide --> méthode oblige d'avoir le transforme
  // renommer ToFarenheitPipe avec totemperature --> pour pouvoir avoir°c ou °f

  transform(value: number, unite?: 'c' | 'f'): string | number {
    // console.log(args)
    // args tableau qui contient les paramétres, ...  cest quand on ne sait pas il y a combien de paramètre : transform(value: number, ...args: unknown[]): string {
    //  unite?: 'c' | 'f'): --> signifie soit undefined, soit c soit f
    if (unite === "c") {
      return `${(value - 32) * 5 / 9}C°`;

    };
    if (unite === 'f') {
      const temp = (value * 9 / 5) + 32;
      return `${temp} F°`;
    };

    return value;
    // backtip transforme en string donc on doit mettre :string mais avec value, comme value est un number on met string | number
  }

}
