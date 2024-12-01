import { FC } from 'react';

import { CityList } from '@/components/CityList';
import { SearchCity } from '@/components/SearchCity';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import './App.css';

export const App: FC = () => {
  const theme = useAppSelector((state) => state.weather.theme);

  const themeStyle = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  return (
    <div className={themeStyle}>
      <div className="wrapper">
        <SearchCity />
        <CityList />
      </div>
    </div>
  );
};
