import { createSelector } from '@reduxjs/toolkit';

export const selectModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;

export const selectModalLogoutOpen = state => state.global.isModalLogoutOpen;

const userBalance = state => state.auth.user.balance;

const balanceAfter = state => state.transactions.balanceAfter;

export const selectBalance = createSelector(
  [balanceAfter, userBalance],
  (balanceAfterCalc, userBalanceCalc) => {
    return balanceAfterCalc || userBalanceCalc;
  }
);
