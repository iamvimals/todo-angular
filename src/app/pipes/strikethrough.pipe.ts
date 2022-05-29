import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strikethrough'
})
export class StrikethroughPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return;
  }
}
