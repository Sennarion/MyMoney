export const selectTransactions = state =>
  [...state.transactions.transactions].reverse();

export const selectFilteredTransactions = state =>
  state.transactions.filteredTransactions;

export const selectCategories = state => state.transactions.categories;

export const selectIncomeSummary = state => state.transactions.incomeSummary;

export const selectExpenseSummary = state => state.transactions.expenseSummary;

export const selectTransactionsErrorStatus = state => state.transactions.error;

export const selectIsTransactionsLoading = state =>
  state.transactions.isLoading;

export const selectSuccessfulTransaction = state => state.transactions.success;

export const selectTransactionErrorStatus = state => state.transactions.error;
