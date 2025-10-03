'use client';
import { useEffect, ReactNode } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: ReactNode;
}

export default function BootstrapClient({ children }: Props) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {})
      .catch((err) => console.error('Bootstrap JS failed to load', err));
  }, []);

  return <>{children}</>;
}
