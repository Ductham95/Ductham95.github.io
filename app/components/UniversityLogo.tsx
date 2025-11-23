'use client';

import { useState } from 'react';

export default function UniversityLogo() {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
        return (
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg">
                🎓
            </div>
        );
    }

    return (
        <div className="w-20 h-20 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 p-2 shadow-lg">
            <img
                src="/hust-logo.svg"
                alt="HUST Logo"
                className="w-full h-full object-contain"
                onError={() => setImageError(true)}
            />
        </div>
    );
}
