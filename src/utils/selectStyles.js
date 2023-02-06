import { theme } from 'styles/theme';

export const selectStyles = {
  control: base => ({
    ...base,
    width: `${theme.spacing(70)}`,
    border: `1px solid ${theme.colors.secondaryTextColor}`,
    boxShadow: 'none',
    padding: `${theme.spacing(1)}`,
    borderRadius: `${theme.spacing(2)}`,
    '&:focus': {
      borderColor: `${theme.colors.primaryLight}`,
    },

    '@media only screen and (min-width: 768px)': {
      width: `${theme.spacing(100)}`,
    },
  }),
};
