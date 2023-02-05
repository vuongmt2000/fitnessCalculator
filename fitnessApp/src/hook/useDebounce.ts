import {useCallback} from 'react';
import {debounce} from 'lodash';

export const useDebounce = (
  fnToDebounce: (...args: any[]) => any,
  dependencies?: DependencyList,
) => {
  if (fnToDebounce == null) {
    throw new TypeError('fnToDebounce cannot be null');
  }

  if (typeof fnToDebounce !== 'function') {
    throw new TypeError('fnToDebounce should be a function');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback<any>(
    debounce(fnToDebounce, 300, {leading: true, trailing: false}),

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dependencies,
  );
};

export default useDebounce;
