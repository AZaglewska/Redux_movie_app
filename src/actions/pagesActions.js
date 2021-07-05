import { actionsTypes } from "./actionsTypes";

export const increasePageNumberAction = () => ({
  type: actionsTypes.INCREASE_PAGE_NUMBER,
});

export const decreasePageNumberAction = () => ({
  type: actionsTypes.DECREASE_PAGE_NUMBER,
});
