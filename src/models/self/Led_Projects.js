/* jshint indent: 2 */

const { Sequelize, Model, DataTypes } = require('sequelize')
const BaseModel = require('../../base/base_model')
class Led_Projects extends BaseModel {}

Led_Projects.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    projectName: {
      type: 'LONGTEXT',
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isDelete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    indexImage: {
      type: 'LONGTEXT',
      allowNull: true
    },
    remarks: {
      type: 'LONGTEXT',
      allowNull: true
    }
  },
  {
    modelName: 'Led_Projects', // 指定表名
    timestamps: false // 默认禁用时间戳
  }
)

module.exports = Led_Projects
