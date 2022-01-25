/* eslint-disable node/no-unsupported-features/es-syntax */
export default {
  sayHello(call, callback) {
    callback(null, { message: `Hello this is User, ${  call.request.name}` });
  },
  sayHelloAgain(call, callback) {
    callback(null, { message: `Hello this is User, ${  call.request.name}` });
  },
};
