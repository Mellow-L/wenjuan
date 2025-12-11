import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f26ca1ff',
          borderRadius: 6,
          // colorBgContainer: '#f9f5f5ff',
          colorBgContainer: '#ffffffff',
        },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </StrictMode>,
)
