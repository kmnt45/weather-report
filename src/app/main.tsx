import React from 'react';

import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';

import { Provider } from 'react-redux';
import { store } from '@/store';

import { App } from '@/app/App.tsx';

import 'normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
