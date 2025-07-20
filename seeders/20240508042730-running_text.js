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
    return queryInterface.bulkInsert("Running_texts", [
      {
        id: 1,
        message: "🏛️ Dinas Kependudukan dan Pencatatan Sipil Kota Singkawang | Melayani dengan Sepenuh Hati",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Running_texts", null, {});
  }
};
