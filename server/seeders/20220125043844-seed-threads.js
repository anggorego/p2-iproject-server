'use strict';
const fs = require('fs')
let datas = JSON.parse(fs.readFileSync("./db/threads.json","utf-8"))
datas.forEach(el => {
  el.createdAt = new Date
  el.updatedAt = new Date
});
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Threads',datas, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Threads', null, {});
  }
};
