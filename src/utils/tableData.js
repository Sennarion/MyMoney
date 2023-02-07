import categoryColor from 'data/data';
import { nanoid } from '@reduxjs/toolkit';
export default function tableData(arr) {
  return arr
    .filter(tr => tr.type === 'EXPENSE')
    .map(tr => {
      const color = categoryColor.find(el => el.name === tr.name).color;
      console.log(color);
      return { ...tr, color, id: nanoid() };
    });
}
