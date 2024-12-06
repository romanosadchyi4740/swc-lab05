import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return `⭐️ ${value} ⭐️`;
  }
}
