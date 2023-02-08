import { createSelector } from '@reduxjs/toolkit';

export const selectModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;

export const selectModalLogoutOpen = state => state.global.isModalLogoutOpen;

const userBalance = state => state.auth.user.balance;
const balanceAfter = state => state.transactions.balanceAfter;

export const selectBalance = createSelector(
  [userBalance, balanceAfter],
  (userBalance, balanceAfter) => {
    return balanceAfter || userBalance;
  }
);

const isTransactionsLoading = state => state.transactions.isLoading;
const isAuthLoading = state => state.auth.isLoading;

export const selectIsLoading = createSelector(
  [isTransactionsLoading, isAuthLoading],
  (isTransactionsLoading, isAuthLoading) => {
    return isTransactionsLoading || isAuthLoading;
  }
);
