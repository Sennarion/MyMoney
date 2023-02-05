import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export default function WithAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = props => {
    const token = useSelector(selectToken);

    return token !== null ? (
      <Component {...props} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };

  return ProtectedComponent;
}
