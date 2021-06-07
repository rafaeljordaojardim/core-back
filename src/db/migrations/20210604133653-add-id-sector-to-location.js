module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'locations', // name of Source model
      'sectorId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'sectors', // name of Target model
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'locations', // name of Source model
      'sectorId' // key we want to remove
    )
  }
}
