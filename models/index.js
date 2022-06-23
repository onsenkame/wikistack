const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


//Kevin Warren Solution
// const Page = db.define('page', {
//     title: Sequelize.STRING, //	the page's title
//     slug: Sequelize.TEXT, // a url-safe version of the page title, for links
//     content: Sequelize.TEXT, //	the page content
//     status: Sequelize.ENUM('open', 'closed') //	if the page is open or closed
// });

// const User = db.define('user', {
//     name: Sequelize.STRING, // full name of user
//     email: Sequelize.STRING // unique email
// });

//FSA  example:
const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isUrl: true //maybe not needed?
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isEmail: true
    }
  }
});

module.exports = {
  db,
  Page,
  User
};