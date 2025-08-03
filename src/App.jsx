import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InvoicesPage from './pages/InvoicesPage';
import CustomersPage from './pages/CustomersPage';
import SuppliersPage from './pages/SuppliersPage';
import ReportsPage from './pages/ReportsPage';
import ExpensesPage from './pages/ExpensesPage';
import NewInvoicePage from './pages/NewInvoicePage';

const App = () => {
  return (
    <Router>
      <div className="nav">
        <Link to="/">الرئيسية</Link>
        <Link to="/invoices">فواتير</Link>
        <Link to="/customers">عملاء</Link>
        <Link to="/suppliers">موردين</Link>
        <Link to="/reports">تقارير</Link>
        <Link to="/expenses">مصروفات</Link>
        <Link to="/new-invoice">إنشاء فاتورة جديدة</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/new-invoice" element={<NewInvoicePage />} />
      </Routes>
    </Router>
  );
};

export default App;
