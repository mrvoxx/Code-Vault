// List of items to be shared with other files
const item = ['item1', 'item2', 'item3'];

// Student name
const student = "ashwin";

// Student course
const course = "btech";

// Private information (only available inside this file)
const secret = "he have zero balence";

// Export selected data so other files can use it
// 'secret' is NOT exported, so it stays private
module.exports = { student, course, item };
