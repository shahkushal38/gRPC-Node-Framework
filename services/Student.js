/* eslint-disable node/no-unsupported-features/es-syntax */
export default {
  sayHello(call, callback) {
    callback(null, { message: `Hello ${call.request.name}` });
  },
  sayHelloAgain(call, callback) {
    callback(null, { message: `Hello ${call.request.name}` });
  },
};
