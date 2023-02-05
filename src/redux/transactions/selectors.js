export const selectTransactions = state => state.transactions.transactions;

export const selectFilteredTransactions = state =>
  state.transactions.filteredTransactions;

export const selectCategories = state => state.transactions.categories;

export const selectTransactionsErrorStatus = state => state.transactions.error;
