import type {Store} from 'redux';
import type {Persistor} from 'redux-persist';
import NavigationStack from '../../libs/navigation/navigationstack';
import type {RootState} from '../../redux/rootReducer';

export class Application {
  /**
   * redux store
   */
  store: Store<RootState>;
  /**
   * persistor for the redux store
   */
  persistor: Persistor;

  navigationStack: NavigationStack;

  isInitialized?: boolean;

  constructor({store, persistor}: {store: Store; persistor: Persistor}) {
    this.store = store;
    this.persistor = persistor;
    this.navigationStack = new NavigationStack();
  }
  /**
   * Initializes the client plugins, settings and subscribers.
   * Can only be called once.
   */
  async init() {
    if (this.isInitialized) {
      console.log('application is initialized');
      return;
    }
    console.log('application is not initialized');
    this.isInitialized = true;
  }

  /**
   * do update/clean cache...
   */
  async cleanup() {
    await this.persistor.purge();
  }

  async reset() {
    await this.persistor.purge();
  }
}
