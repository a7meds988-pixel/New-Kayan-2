import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InvoicesPage from './pages/InvoicesPage';
import CustomerPage from './pages/CustomerPage';
import SupplierPage from './pages/SupplierPage';
import ExpensesPage from './pages/ExpensesPage';
import NewInvoice from './pages/NewInvoice';
import ReportsPage from './pages/ReportsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/suppliers" element={<SupplierPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/new-invoice" element={<NewInvoice />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
