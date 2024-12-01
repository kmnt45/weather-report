import { FC } from 'react';

import { IWeather } from '@/models';

import styles from './CityCard.module.scss';

interface CityCardProps {
  city: IWeather;
}

export const CityCard: FC<CityCardProps> = ({ city }) => {
  const {
    name,
    main: { temp, humidity, pressure },
    wind: { speed },
  } = city;

  const windSpeed = Math.round(speed * 0.44704);

  const mainPressure = Math.round(pressure * 0.75);

  return (
    <div className={styles.cityCard}>
      <div>Город: {name}</div>
      <div>Температура: {temp}</div>
      <div>Скорость ветра: {windSpeed} м/с</div>
      <div>Влажность: {humidity}%</div>
      <div>Давление: {mainPressure} мм рт. ст.</div>
    </div>
  );
};
