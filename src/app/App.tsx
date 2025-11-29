import { FC } from 'react';

import { CityList } from '@/components/CityList';
import { SearchCity } from '@/components/SearchCity';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { selectTheme } from '@/slices';

import styles from './App.module.scss';

export const App: FC = () => {
  const theme = useAppSelector(selectTheme);

  const themeStyle = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  return (
    <div className={styles[themeStyle]}>
      <div className={styles.wrapper}>
        <SearchCity />
        <CityList />
      </div>
    </div>
  );
};
