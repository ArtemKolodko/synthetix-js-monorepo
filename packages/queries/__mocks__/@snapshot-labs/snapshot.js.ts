const mock = {
  utils: {
    getScores: () => [
      { '0x0000000000000000000000000000000000000000': 15 },
      { '0x0000000000000000000000000000000000000000': 0 },
    ],

    subgraphRequest: async () => ({ accounts: [] }),
  },
};

export default mock;
