require('dotenv').config();
const Promise = require('bluebird');
const _ = require('lodash');
const inquirer = require('inquirer');

const askCredentialsSchema = [
  {
    type: 'input',
    name: 'username',
    message: 'Please enter Instagram username',
    require: true,
  },
  {
    type: 'password',
    name: 'password',
    message: 'Please enter Instagram password',
    require: true,
  },
  {
    type: 'input',
    message: 'Is there a proxy you want to use?',
    name: 'proxy',
  },
];

exports.credentials = () => {
  const credentials = [
    process.env['IG_USERNAME'],
    process.env['IG_PASSWORD'],
    process.env['IG_PROXY'],
  ];
  if (_.isString(credentials[0]) && _.isString(credentials[1]))
    return Promise.resolve(credentials);
  return new Promise((resolve, reject) => inquirer.prompt(askCredentialsSchema).then(answers => {
    resolve([answers.username, answers.password, answers.proxy]);
  }, reject));
};
