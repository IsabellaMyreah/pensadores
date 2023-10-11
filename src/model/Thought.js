const { Model, DataTypes } = require("sequelize")

class Trought extends Model {
    static init(connection) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        )
    }
}

module.exports = Trought;