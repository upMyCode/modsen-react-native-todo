import { changeDateCategory } from '@src/slices/addDateCategorySlice';
import { useAppDispatch } from '@src/store/hooks';

export interface ItemDataButtons {
  value: string;
  onPress: () => void;
}

export default function useGetDateCategoriesButtons() {
  const dispatch = useAppDispatch();

  const DATE_BUTTONS: ItemDataButtons[] = [
    {
      value: 'Today',
      onPress: () => {
        dispatch(changeDateCategory({ dateCategory: 'Today' }));
      },
    },
    {
      value: 'Week',
      onPress: () => {
        dispatch(changeDateCategory({ dateCategory: 'Week' }));
      },
    },
    {
      value: 'Month',
      onPress: () => {
        dispatch(changeDateCategory({ dateCategory: 'Month' }));
      },
    },
  ];

  return {
    DATE_BUTTONS,
  };
}
