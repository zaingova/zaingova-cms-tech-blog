const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
   // used to check if user password is valid -> returns TRUE or FALSE
   checkPassword = async (password) => {
      return await bcrypt.compareSync(password, this.password);
   }
}

User.init(
   {
      
      // ID -> primary key
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      first_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      last_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true,
         },
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         // password needs to be ALPHANUMERIC and must have a minimun length of 8
         validate: {
            len: [8],
            isAlphanumeric: true,
         },
      },
   },
   {
      hooks: {
         // hook used to encrypt a user's password for security
         beforeCreate: async (newUser) => {
            try {
               newUser.password = await bcrypt.hash(newUser.password, 10);
               return newUser;
            } catch (err) {
               console.log(err);
               return (err);
            }
         }
      },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
   }
)

module.exports = User;