// Name of the database
exports.DB_NAME = process.env.DB_NAME || 'webook';

// Port of the database
exports.PORT = process.env.DB_PORT || 27017;

// Url of the database
exports.DB_HOST = 'mongodb+srv://root:blackgulaman@cluster0-k0xkx.mongodb.net/test?retryWrites=true&w=majority'
// if (process.env.NODE_ENV === 'production')
// else
//   exports.DB_HOST = `mongodb://localhost:${exports.PORT}/${exports.DB_NAME}`;

// Configuration of database
exports.DB_OPTIONS = {
  dbName: exports.DB_NAME,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  autoIndex: true,
  // autoReconnect: true,
  // reconnectTries: Number.MAX_VALUE,
  // reconnectInterval: 1000,
  poolSize: 10,
  bufferMaxEntries: 0
};
