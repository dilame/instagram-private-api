import * as camelKeys from 'camelcase-keys';
import { classToPlain } from 'class-transformer';

export class BaseModel {
  get params() {
    return camelKeys(classToPlain(this), { deep: true });
  }
}
