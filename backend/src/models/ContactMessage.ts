import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class ContactMessage extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare subject: string;
  declare message: string;
  declare read: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

ContactMessage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'ContactMessage',
    tableName: 'contact_messages',
    timestamps: true,
  }
);

export default ContactMessage;
