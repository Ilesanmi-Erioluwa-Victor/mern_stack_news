'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

    useEffect(() => {
      
      const url = pathname + searchParams.toString();
      NProgress.start(url);
      NProgress.done(url);
      console.log(url);
      
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}
