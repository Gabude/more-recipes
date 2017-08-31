module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    directions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeTypes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  {

    associate: (models) => {

      recipe.belongsTo(models.user,{
        foreignKey: 'id',
        as: 'userId',
      });

    }

  });


  return recipe;
};