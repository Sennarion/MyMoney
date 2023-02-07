export const selectTransactions = state => state.transactions.transactions;

export const selectFilteredTransactions = state =>
  state.transactions.filteredTransactions;

export const selectCategories = state => state.transactions.categories;

export const selectIncomeSummary = state => state.transactions.incomeSummary;

export const selectExpenseSummary = state => state.transactions.expenseSummary;

export const selectTransactionsErrorStatus = state => state.transactions.error;
