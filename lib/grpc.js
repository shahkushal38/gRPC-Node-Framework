var PROTO_PATH = __dirname + '/../protos/student.proto';

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var student_proto = grpc.loadPackageDefinition(packageDefinition).Student;
var studentService = require(__dirname + '/../services/Student.js');

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  server.addService(student_proto.service, studentService.default);
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
