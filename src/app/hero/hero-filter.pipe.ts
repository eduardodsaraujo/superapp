import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from './hero';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: IHero[], args?: string[]): IHero[] {
    let characters = args.toString();
    let filter:string = characters ? characters.toLocaleLowerCase():null;
    return filter? value.filter((hero:IHero) =>
      hero.heroName.toLocaleLowerCase().indexOf(filter) != -1):value;
  }
}
