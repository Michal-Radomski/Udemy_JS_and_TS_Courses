//* Proxy
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get(target: any, prop: string, receiver: any) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(target, prop, receiver);
  },
};

const proxy = new Proxy(target, handler);
console.log({ proxy });
