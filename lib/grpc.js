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
    var servicesAndKeys = _.chain(grpc.loadPackageDefinition(packageDefinition))
      .map((value, key) => {
        return { service: value.service, key: key };
      })
      .filter((value) => {
        return value.service;
      })
      .value();

    _.each(servicesAndKeys, (value) => {
      var protoService = require(`${__dirname}/../services/${value.key}.js`);
      server.addService(value.service, protoService.default);
    });
  });
  main();
});

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
