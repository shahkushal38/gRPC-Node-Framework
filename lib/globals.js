global._ = require('lodash');
global.grpc = require('@grpc/grpc-js');
global.protoLoader = require('@grpc/proto-loader');
global.server = new grpc.Server();
