export function Enumerable(value: boolean) {
  return (target: any, key: string) => {
    Object.defineProperty(target, key, {
      get: function() {
        return undefined;
      },
      set: function(this: any, val: any) {
        Object.defineProperty(this, key, {
          value: val,
          writable: true,
          enumerable: value,
          configurable: true,
        });
      },
      enumerable: false,
    });
  };
}
