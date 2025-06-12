'use strict';

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
    return queryInterface.bulkInsert("Admin_tbs", [
      {
        user: "loket1",
        password: "password",
        privilege: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "loket2",
        password: "password",
        privilege: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "loket3",
        password: "password",
        privilege: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "loket4",
        password: "password",
        privilege: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "loket5",
        password: "password",
        privilege: "A 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "rsaa",
        password: "rsaa",
        privilege: "ANT",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete("Admin_tbs", null, {});
  }
};
