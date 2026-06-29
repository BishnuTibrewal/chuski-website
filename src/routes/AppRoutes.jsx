import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import About from '../pages/About'
import Home from '../pages/Home'
import PaymentsRefunds from '../pages/PaymentsRefunds'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import TermsConditions from '../pages/TermsConditions'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="payments-and-refunds" element={<PaymentsRefunds />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
