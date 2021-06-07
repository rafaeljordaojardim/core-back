module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // name of Source model
      'profileId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'profiles', // name of Target model
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', // name of Source model
      'profileId' // key we want to remove
    )
  }
}
