const keytar = require('keytar'),
  service1 = 'service1',
  account1 = 'account1',
  password1 = 'password1';

keytar.setPassword(service1, account1, password1)
  .then(() => {
    keytar.getPassword(service1, account1)
      .then(console.log);
  })
  .catch(console.error);

