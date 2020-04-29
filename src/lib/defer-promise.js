// This allows you to explicitly create and resolve a promise as needed
module.exports = function defer() {
  const deferred = {
    promise: Promise.resolve(),
    resolve: () => {},
    reject: (error) => {},
  };

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};