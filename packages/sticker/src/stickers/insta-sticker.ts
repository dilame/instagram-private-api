import * as snakeCaseKeys from 'snakecase-keys';
import { classToPlain } from 'class-transformer';

export abstract class InstaSticker {
  public width: number;
  public height: number;
  public rotation: number = 0.0;
  public x: number = 0.0;
  public y: number = 0.0;
  public z: number = 0;

  public isSticker: boolean = true;

  public abstract get id(): string;

  public abstract get key(): string;

  /**
   * Only used to set the media id when attaching media
   */
  public get additionalConfigureProperties(): any {
    return null;
  }

  public center(): this {
    this.x = 0.5;
    this.y = 0.5;
    return this;
  }

  public rotateDeg(deg: number): this {
    this.rotation = deg % 360.0;
    return this;
  }

  public scale(factor: number): this {
    this.width *= factor;
    this.height *= factor;
    return this;
  }

  public moveForward(layers: number = 1): this {
    this.z += layers;
    return this;
  }

  public moveBackwards(layers: number = 1): this {
    return this.moveForward(-layers);
  }

  public right(): this {
    this.x = 1.0 - this.width / 2;
    return this;
  }

  public left(): this {
    this.x = this.width / 2;
    return this;
  }

  public top(): this {
    this.y = this.height / 2;
    return this;
  }

  public bottom(): this {
    this.y = 1.0 - this.height / 2;
    return this;
  }

  public toJSON() {
    // @ts-ignore
    return snakeCaseKeys(classToPlain(this), { deep: true });
  }
}
