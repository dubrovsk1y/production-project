import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonVariant } from "shared/ui";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        variant={ButtonVariant.OUTLINED}
        onClick={increment}
        // eslint-disable-next-line i18next/no-literal-string
      >
        increment
      </Button>
      <Button
        data-testid="decrement-btn"
        variant={ButtonVariant.OUTLINED}
        onClick={decrement}
        // eslint-disable-next-line i18next/no-literal-string
      >
        decrement
      </Button>
    </div>
  );
};
