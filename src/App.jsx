import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import الصفحةالرئيسية from './pages/HomePage';
import العملاء from './pages/CustomersPage';
import الفواتير from './pages/InvoicesPage';
import المصروفات from './pages/ExpensesPage';
import التقارير from './pages/ReportsPage';

const App = () => {
  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/">الرئيسية</Link> |{' '}
        <Link to="/customers">العملاء</Link> |{' '}
        <Link to="/invoices">الفواتير</Link> |{' '}
        <Link to="/expenses">المصروفات</Link> |{' '}
        <Link to="/reports">التقارير</Link>
      </nav>
      <Routes>
        <Route path="/" element={<الصفحةالرئيسية />} />
        <Route path="/customers" element={<العملاء />} />
        <Route path="/invoices" element={<الفواتير />} />
        <Route path="/expenses" element={<المصروفات />} />
        <Route path="/reports" element={<التقارير />} />
      </Routes>
    </div>
  );
};

export default App;
