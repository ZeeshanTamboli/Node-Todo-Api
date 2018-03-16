const env = process.env.NODE_ENV;

if (env === 'test') {
  module.exports = {
    mongoURI: 'mongodb://localhost/TodoAppTest'
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/TodoApp'
  };
}
