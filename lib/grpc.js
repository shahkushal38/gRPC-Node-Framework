var glob = require('glob');

// options is optional

glob(__dirname + '/../protos/*.proto', function (er, files) {
  _.each(files, (file) => {
    var PROTO_PATH = file;

    var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    _.each(packageDefinition, (values, key) => {
      console.log(typeof values, values, key);
    });

    var student_proto = grpc.loadPackageDefinition(packageDefinition).Student;
    var studentService = require(__dirname + '/../services/Student.js');
    server.addService(student_proto.service, studentService.default);
  });

  console.log(1);
});
console.log(2);

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  server.bindAsync(
    `0.0.0.0:${process.env.PORT}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log(`Server Started at Port ${process.env.PORT}`);
    }
  );
}

main();
