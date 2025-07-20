'use strict';

const { id } = require('date-fns/locale');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert("Level_tbs", [
      {
        id: 1,
        kode: "1",
        level: "Loket 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        kode: "2",
        level: "Loket 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        kode: "3",
        level: "Loket 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        kode: "4",
        level: "Loket 4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        kode: "5",
        level: "Loket 5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        kode: "A 1",
        level: "Loket Perekaman",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        kode: "ANT",
        level: "Cetak Antrian",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Level_tbs", null, {});
  }
};
