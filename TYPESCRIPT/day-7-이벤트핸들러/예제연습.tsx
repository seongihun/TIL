// LanguageContext.tsx
import { createContext,useState,useContext ,ReactNode} from 'react';

// 1️⃣ 사용할 수 있는 언어 타입 정의
// 예: 'ko' | 'en'
type Language = 'ko' | 'en';

// 2️⃣ Context에 담길 값의 타입 정의
interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

// 3️⃣ Context 생성 (기본값 지정)
const LanguageContext = createContext<LanguageContextValue>({
    language: 'ko',
    setLanguage: () => {}
});

// 4️⃣ Provider 컴포넌트 정의
export function LanguageProvider({ children }: { children: ReactNode }) {
  // 상태 정의
  const [language, setLanguage] = useState<Language>('ko');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 5️⃣ Context를 가져다 쓰는 커스텀 훅
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
