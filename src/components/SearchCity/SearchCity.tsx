import { FC, useState, ChangeEvent, FormEvent } from 'react';

import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getCity } from '@/service';
import { selectTheme, toggleTheme } from '@/slices';

import styles from './SearchCity.module.scss';

export const SearchCity: FC = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(selectTheme);

  const [city, setCity] = useState('');

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim()) {
      dispatch(getCity(city));
    }
  };

  const inputDarkThemeStyle = theme === 'dark' ? 'inputDarkTheme' : 'inputLightTheme';

  const buttonDarkThemeStyle = theme === 'dark' ? 'buttonDarkTheme' : 'buttonLightTheme';

  const themeIcon = theme === 'dark' ? <MoonOutlined /> : <SunOutlined />;

  return (
    <div className={styles.InputCity}>
      <div className={styles.title}>
        <div className={styles.themeToggle} onClick={handleToggleTheme}>
          {themeIcon}
        </div>
        <div>Погода</div>
      </div>
      <form className={styles.form} onSubmit={handleSearch}>
        <Input
          className={styles[inputDarkThemeStyle]}
          value={city}
          placeholder='Введите город  <3'
          onChange={handleChangeCity}
        />
        <Button className={styles[buttonDarkThemeStyle]} disabled={!city.trim()} type='primary' htmlType='submit'>
          Поиск
        </Button>
      </form>
    </div>
  );
};
