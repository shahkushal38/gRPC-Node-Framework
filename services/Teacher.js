export default {
  sayHello(call, callback) {
    callback(null, { message: "Hello this is Teacher, " + call.request.name });
  },
  sayHelloAgain(call, callback) {
    callback(null, { message: "Hello this is Teacher, " + call.request.name });
  },
};
