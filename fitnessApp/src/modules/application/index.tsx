import {Application} from './application';
import React, {createContext, ReactNode} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../../redux/store';

export const initialApplication = () => {
  const application = new Application({
    store,
    persistor,
  });
  return application;
};

export const ApplicationContext = createContext<Application | null>(null);

export const ApplicationProvider = ({
  application,
  children,
}: {
  application: Application;
  children?: ReactNode | ((bootstrapped: boolean) => ReactNode);
}) => {
  if (!application) {
    return null;
  }

  return (
    <ApplicationContext.Provider value={application}>
      <Provider store={application.store}>
        <PersistGate loading={null} persistor={application.persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ApplicationContext.Provider>
  );
};
