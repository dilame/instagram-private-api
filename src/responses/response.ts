import * as camelKeys from 'camelcase-keys';
import { classToPlain } from 'class-transformer';

export abstract class Response {
  [x: string]: any;
  get params() {
    return camelKeys(classToPlain(this), { deep: true });
  }
}
