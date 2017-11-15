module.exports = (tasks, callback) => {
  const results = [];
  let count = 0;

  tasks.forEach((task, index) => {
    task((err, result) => {
      if (err) {
        return callback(err);
      }

      results[index] = result;
      count++;

      if (count === tasks.length) {
        return callback(null, results);
      }
    });
  });
};
