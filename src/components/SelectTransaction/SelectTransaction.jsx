import { useState } from 'react';
import {
  SelectWrapper,
  ButtonSelect,
  SelectList,
  SelectItem,
} from './SelectTransaction.styled';
import { SlArrowDown } from 'react-icons/sl';

export default function SelectTransaction({ categories, onSelectToggle }) {
  const [selectDropdownShown, setSelectDropdownShown] = useState(false);
  const [category, setCategory] = useState(0);
  const categoryNames = ['Select a category'];
  categoryNames.push(...categories.map(cat => cat.name));
  function handleDropDown() {
    setSelectDropdownShown(prev => !prev);
  }

  function handleCategory(e) {
    setCategory(e.target.dataset.idx);
    onSelectToggle(e.target.dataset.id);
    handleDropDown();
  }

  return (
    <SelectWrapper>
      <ButtonSelect type="button" onClick={handleDropDown}>
        {categoryNames[category]}
        <SlArrowDown />
      </ButtonSelect>
      {selectDropdownShown && (
        <SelectList>
          {categories.map(({ name, id }, i) => {
            return (
              <SelectItem
                key={id}
                data-idx={i + 1}
                data-id={id}
                onClick={handleCategory}
              >
                {name}
              </SelectItem>
            );
          })}
        </SelectList>
      )}
    </SelectWrapper>
  );
}
