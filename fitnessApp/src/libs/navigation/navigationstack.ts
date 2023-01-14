import {NavigationStackComponents} from '../../constants/enum';
import Screens from '../../screens/Screens';
import Stack from './stack';

export default class NavigationStack {
  private _currentStack: number;
  set currentStack(value: number) {
    if (value === this._currentStack) {
      this.clear();
    }
    this._currentStack = value;
  }
  get currentStack(): number {
    return this._currentStack;
  }
  private readonly stack: Array<Stack<string>>;

  constructor() {
    this._currentStack = 0;
    this.stack = [new Stack(Screens.HomeStack), new Stack(Screens.DetailStack)];
  }

  push(value: string): number {
    return this.stack[this._currentStack].push(value);
  }

  pop(): string | undefined {
    if (this.stack[this._currentStack].length > 1) {
      return this.stack[this._currentStack].pop();
    }
    return undefined;
  }

  clear() {
    this.stack[this._currentStack] = new Stack(
      NavigationStackComponents[this._currentStack],
    );
  }

  first(): string | undefined {
    return this.stack[this._currentStack].first();
  }
}
