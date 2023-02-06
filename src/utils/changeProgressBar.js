import { theme } from 'styles/theme';

export function changeProgressBar(password, setProgressBarStyles) {
  if (
    password.match(
      /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]))/
    )
  ) {
    setProgressBarStyles({
      width: '100%',
      backgroundColor: theme.colors.accentGreen,
    });
  } else if (password.match(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))/)) {
    setProgressBarStyles({
      width: '66%',
      backgroundColor: theme.colors.accentPink,
    });
  } else {
    setProgressBarStyles({
      width: '33%',
      backgroundColor: theme.colors.alert,
    });
  }
}
