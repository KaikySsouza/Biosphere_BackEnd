
module.exports = {

  dialect: 'mysql',
  host:'localhost',
  username:'root',
  password:'2005',
  database: 'biosphere',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
  },
  dialectOption: {
    timezone: '-03:00'
  },
  timezone: '-03:00'
}
