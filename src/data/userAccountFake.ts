export const userAccountFake = {
  name: 'Sysnovare',
  email: 'sysnovare@email.com',
  password: '1234',
  account: {
    balance: 10,
    movements: [
      {
        index: 0,
        type: 'deposit',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:02:09 GMT',
      },
      {
        index: 1,
        type: 'deposit',
        value: 10,
        balance: 20,
        date: 'Thu, 26 Jan 2023 11:03:09 GMT',
      },
      {
        index: 2,
        type: 'withdraw',
        value: 10,
        balance: 10,
        date: 'Thu, 26 Jan 2023 11:05:09 GMT',
      },
    ],
  },
};
