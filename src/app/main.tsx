import React from 'react';

import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import { App } from '@/app/App.tsx';
import { store } from '@/store';

import 'normalize.css';
import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
