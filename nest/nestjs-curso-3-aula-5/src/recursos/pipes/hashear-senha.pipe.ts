import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HasearSenhaPipe implements PipeTransform {
  transform(senha: string) {
    return senha + 'abcdef';
  }
}
