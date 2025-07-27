'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { i18n: i18nInstance } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18nInstance.language === 'en' ? 'ar' : 'en';
    i18nInstance.changeLanguage(newLang);
  };

  useEffect(() => {
    const updateHtmlAttributes = () => {
      const currentLang = i18nInstance.language;
      const isRTL = currentLang === 'ar';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    };

    updateHtmlAttributes();
    
    const handleLanguageChanged = () => {
      updateHtmlAttributes();
    };

    i18nInstance.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18nInstance.off('languageChanged', handleLanguageChanged);
    };
  }, [i18nInstance]);

  const isEnglish = i18nInstance.language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
      title={isEnglish ? 'Switch to Arabic' : 'Switch to English'}
    >
      {isEnglish ? (
        // Saudi Arabia Flag
        <svg className="w-5 h-4 rounded-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#006C35"/>
          <text x="450" y="320" text-anchor="middle" fill="#fff" font-family="Arial, sans-serif" font-size="80" font-weight="bold">لا إله إلا الله محمد رسول الله</text>
          <path d="M450 200 L500 280 L580 280 L520 340 L540 420 L450 380 L360 420 L380 340 L320 280 L400 280 Z" fill="#fff"/>
        </svg>
      ) : (
        // US Flag
        <svg className="w-5 h-4 rounded-sm" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#B22234"/>
          <rect width="900" height="46.15" y="0" fill="#fff"/>
          <rect width="900" height="46.15" y="92.3" fill="#fff"/>
          <rect width="900" height="46.15" y="184.6" fill="#fff"/>
          <rect width="900" height="46.15" y="276.9" fill="#fff"/>
          <rect width="900" height="46.15" y="369.2" fill="#fff"/>
          <rect width="900" height="46.15" y="461.5" fill="#fff"/>
          <rect width="900" height="46.15" y="553.8" fill="#fff"/>
          <rect width="360" height="323.1" fill="#3C3B6E"/>
          <g fill="#fff">
            <g id="s1">
              <g id="s2">
                <g id="s3">
                  <g id="s4">
                    <g id="s5">
                      <g id="s6">
                        <g id="s7">
                          <g id="s8">
                            <g id="s9">
                              <g id="s10">
                                <g id="s11">
                                  <g id="s12">
                                    <g id="s13">
                                      <g id="s14">
                                        <g id="s15">
                                          <g id="s16">
                                            <g id="s17">
                                              <g id="s18">
                                                <g id="s19">
                                                  <g id="s20">
                                                    <g id="s21">
                                                      <g id="s22">
                                                        <g id="s23">
                                                          <g id="s24">
                                                            <g id="s25">
                                                              <g id="s26">
                                                                <g id="s27">
                                                                  <g id="s28">
                                                                    <g id="s29">
                                                                      <g id="s30">
                                                                        <g id="s31">
                                                                          <g id="s32">
                                                                            <g id="s33">
                                                                              <g id="s34">
                                                                                <g id="s35">
                                                                                  <g id="s36">
                                                                                    <g id="s37">
                                                                                      <g id="s38">
                                                                                        <g id="s39">
                                                                                          <g id="s40">
                                                                                            <g id="s41">
                                                                                              <g id="s42">
                                                                                                <g id="s43">
                                                                                                  <g id="s44">
                                                                                                    <g id="s45">
                                                                                                      <g id="s46">
                                                                                                        <g id="s47">
                                                                                                          <g id="s48">
                                                                                                            <g id="s49">
                                                                                                              <g id="s50">
                                                                                                                <polygon id="s" points="24,0 29.5,8.5 39,8.5 31.5,14 34.5,23.5 24,18 13.5,23.5 16.5,14 9,8.5 18.5,8.5"/>
                                                                                                              </g>
                                                                                                            </g>
                                                                                                          </g>
                                                                                                        </g>
                                                                                                      </g>
                                                                                                    </g>
                                                                                                  </g>
                                                                                                </g>
                                                                                              </g>
                                                                                            </g>
                                                                                          </g>
                                                                                        </g>
                                                                                      </g>
                                                                                    </g>
                                                                                  </g>
                                                                                </g>
                                                                              </g>
                                                                            </g>
                                                                          </g>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      )}
      <span className="hidden sm:inline text-gray-700 font-medium">
        {isEnglish ? 'العربية' : 'English'}
      </span>
      <span className="sm:hidden text-gray-700 font-medium text-xs">
        {isEnglish ? 'AR' : 'EN'}
      </span>
    </button>
  );
} 