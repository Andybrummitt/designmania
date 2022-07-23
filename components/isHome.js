import React from 'react';
import { useRouter } from 'next/router';

const isHome = () => {
    const router = useRouter();
    return router.route === "/";
}

export default isHome