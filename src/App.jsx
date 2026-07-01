import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './components/ScrollToTop'
import { Analytics } from '@vercel/analytics/react';
 
function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <Analytics />
    </>
  )
}

export default App
