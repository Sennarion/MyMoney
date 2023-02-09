export function createTransaction(values, incomeCategoryId) {
  return {
    categoryId: values.checked ? values.category.value : incomeCategoryId,
    type: values.checked ? 'EXPENSE' : 'INCOME',
    amount: values.checked ? -Number(values.amount) : Number(values.amount),
    transactionDate: values.date,
    comment: values.comment,
  };
}

export function changeTransaction(values) {
  return {
    amount: values.checked ? -Number(values.amount) : Number(values.amount),
    transactionDate: values.date,
    comment: values.comment,
  };
}
