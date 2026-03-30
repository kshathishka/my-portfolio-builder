import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Project extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare tags: string[];
  declare year: number;
  declare metrics: string[];
  declare link: string;
  declare color: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Project.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    metrics: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      defaultValue: 'primary',
    },
  },
  {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true,
  }
);

export default Project;
