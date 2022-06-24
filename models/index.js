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
    // validate: {
    //     isUrl: true //maybe not needed?
    // } // not needed because slug is the part after the url 
    // url = www.wowthissucks.com/why_are_we_here slug = why_are_we_here
    unique: true // MUST be unique because webpage slugs have to point to one place only
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

Page.beforeValidate((page) => {
  page.slug = page.title.replace(/\s/g, "_").replace(/\W/g, "").toLowerCase(); //regex or regular expressions. Google them for processes or...
  //https://regex101.com/ for practice.
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

//This adds methods to 'Page', such as '.setAuthor'. It also creates a foreign key attribute on the Page table pointing ot the User table
Page.belongsTo(User, { as: "author" });

module.exports = {
  db,
  Page,
  User
};