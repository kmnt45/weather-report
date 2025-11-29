import { FC } from 'react';

import { Empty, Spin } from 'antd';

import { CityCard } from '@/components/CityCard';
import { LoadingStage } from '@/enum';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectWeather } from '@/slices';

import styles from './CityList.module.scss';

export const CityList: FC = () => {
  const { apiData, apiStatus, apiError } = useAppSelector(selectWeather);

  const theme = useAppSelector((state) => state.weather.theme);

  const loading = apiStatus === LoadingStage.LOADING;

  const themeStyle = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  return (
    <div className={styles.CityList}>
      {loading && <Spin size="large" />}
      {apiError && (
        <Empty
          className={styles[themeStyle]}
          description={<span className={styles[themeStyle]}>{apiError.message}</span>}
        />
      )}
      {apiData && apiData.map((city) => <CityCard key={city.id} city={city} />)}
    </div>
  );
};
