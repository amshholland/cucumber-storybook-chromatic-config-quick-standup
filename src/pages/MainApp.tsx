import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Token } from 'models/userProfile';
import { Authenticator } from '@aws-amplify/ui-react';
import { matchPath, Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';
import { DataProvider } from 'contexts/DataProvider';
import SignUpComponents from 'components/SignUpComponents/SignUpComponents';
import { EnergyDataModal } from 'components/Modals/EnergyDataModal';
import styles from '../App.module.css';

Amplify.configure(AWS_CONFIG);

export function MainApp() {
  const { pathname } = useLocation();
  const data = useLoaderData() as Token;
  const profile = matchPath(pathname, '/profile');
  const navigate = useNavigate();

  // redirect to the user profile page first time users
  useEffect(() => {
    if (!profile && data.isFirstTime) {
      navigate('/profile');
    }
  }, []);

  return (
    <Authenticator loginMechanisms={['email']} components={SignUpComponents} variation="modal">
      {({ signOut }) => {
        return (
          <DataProvider>
            <Navbar signOut={signOut} />
            <div className={styles.App} data-testid="App">
              <Outlet />
              <EnergyDataModal />
            </div>
          </DataProvider>
        );
      }}
    </Authenticator>
  );
}
