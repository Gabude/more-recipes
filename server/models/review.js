module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    reviewName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return review;
};