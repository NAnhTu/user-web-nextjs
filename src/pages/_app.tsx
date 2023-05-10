import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import viVN from 'antd/lib/locale/vi_VN';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={viVN}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
