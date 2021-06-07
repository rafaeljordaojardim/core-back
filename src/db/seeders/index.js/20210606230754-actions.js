'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actions', [
      { name: 'Create user', actionNumber: 1, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Update user', actionNumber: 2, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Delete user', actionNumber: 3, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List user', actionNumber: 4, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List users', actionNumber: 5, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Create plan action', actionNumber: 6, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Update plan action', actionNumber: 7, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List plan action', actionNumber: 8, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List plan actions', actionNumber: 9, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Delete plan actions', actionNumber: 10, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Create profile', actionNumber: 11, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Update profile', actionNumber: 12, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List profile', actionNumber: 13, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'List profiles', actionNumber: 14, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') },
      { name: 'Delete profile', actionNumber: 15, createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), updatedAt: Sequelize.literal('CURRENT_TIMESTAMP') }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('actions', null, {})
  }
}
