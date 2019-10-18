module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Servers', {
      'id': {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      'username': {
        type: DataTypes.STRING,
        allowNull: true
      },
      'touchedAt': {
        type: DataTypes.DATE,
        allowNull: true
      },
      'aNumber': {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      'bNumber': {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      'validateTest': {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      'validateCustom': {
        type: DataTypes.STRING,
        allowNull: false
      },
      'dateAllowNullTrue': {
        type: DataTypes.DATE,
        allowNull: true
      },
      'defaultValueBoolean': {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '1'
      },
      'createdAt': {
        type: DataTypes.DATE,
        allowNull: false
      },
      'updatedAt': {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'Users',
      freezeTableName: true
    });
  };