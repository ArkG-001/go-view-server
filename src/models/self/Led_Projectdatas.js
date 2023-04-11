/* jshint indent: 2 */

const { Sequelize, Model, DataTypes } = require('sequelize')
const BaseModel = require('../../base/base_model')

class Led_Projectdatas extends BaseModel {}

Led_Projectdatas.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    projectId: {
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
    contentData: {
      type: 'LONGTEXT',
      allowNull: true
    }
  },
  {
    modelName: 'Led_Projectdatas', // 指定表名
    timestamps: false // 默认禁用时间戳
  }
)

module.exports = Led_Projectdatas
