import * as camelKeys from 'camelcase-keys';
import { classToPlain } from 'class-transformer';

export abstract class AbstractModel {
  [x: string]: any;
  get params() {
    return camelKeys(classToPlain(this), { deep: true });
  }
}
