'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return <>{children}</>;
}
