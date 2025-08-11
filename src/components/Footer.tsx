'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col space-y-4">
          {/* Copyright - Now the only content */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 