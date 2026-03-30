import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Experience extends Model {
  declare id: number;
  declare title: string;
  declare company: string;
  declare startDate: Date;
  declare endDate: Date | null;
  declare current: boolean;
  declare description: string[];
  declare highlights: Array<{ stat: string; label: string; icon: string }>;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    current: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
      defaultValue: [],
    },
    highlights: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: 'Experience',
    tableName: 'experiences',
    timestamps: true,
  }
);

export default Experience;
