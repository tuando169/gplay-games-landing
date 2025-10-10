import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Navigation
    'nav.games': 'Trò Chơi',
    'nav.careers': 'Tuyển Dụng',
    'nav.support': 'Hỗ Trợ',
    'nav.about': 'Về Chúng Tôi',
    
    // Hero
    'hero.title': 'Tạo Ra Những Trò Chơi Được Yêu Thích Trên Toàn Thế Giới',
    'hero.subtitle': 'GPlay là một công ty game toàn cầu có trụ sở tại Việt Nam. Chúng tôi tạo ra những trò chơi mà mọi người muốn chơi trong nhiều năm.',
    'hero.cta': 'Khám Phá Game',
    'hero.players': 'Người Chơi',
    'hero.countries': 'Quốc Gia',
    
    // Featured Games
    'featured.title': 'Trò Chơi Nổi Bật',
    'featured.subtitle': 'Khám phá những tựa game tuyệt vời được hàng triệu người chơi yêu thích',
    'featured.play': 'Chơi Ngay',
    
    // Footer
    'footer.follow': 'Theo dõi chúng tôi',
    'footer.rights': 'Bản quyền thuộc về GPlay. Đã đăng ký bản quyền.',
    
    // Games Page
    'games.title': 'Trò Chơi Của Chúng Tôi',
    'games.subtitle': 'Khám phá bộ sưu tập game tuyệt vời được hàng triệu người chơi yêu thích trên toàn thế giới',
    'games.all': 'Tất Cả',
    'games.action': 'Hành Động',
    'games.strategy': 'Chiến Thuật',
    'games.puzzle': 'Giải Đố',
    'games.downloads': 'Lượt Tải',
    'games.rating': 'Đánh Giá',
    'games.download': 'Tải Game',
    'games.preregister': 'Đăng Ký Trước',
    
    // Careers Page
    'careers.title': 'Cơ Hội Nghề Nghiệp',
    'careers.subtitle': 'Tham gia đội ngũ những người đam mê tạo ra những trò chơi tuyệt vời',
    'careers.openings': 'Vị Trí Tuyển Dụng',
    'careers.benefits': 'Quyền Lợi & Phúc Lợi',
    'careers.location': 'Địa Điểm',
    'careers.type': 'Loại Hình',
    'careers.apply': 'Ứng Tuyển Ngay',
    'careers.form.title': 'Ứng Tuyển Vị Trí',
    'careers.form.name': 'Họ và Tên',
    'careers.form.email': 'Email',
    'careers.form.position': 'Vị Trí Ứng Tuyển',
    'careers.form.portfolio': 'Portfolio/LinkedIn',
    'careers.form.message': 'Lời Nhắn',
    'careers.form.submit': 'Gửi Đơn Ứng Tuyển',
    
    // Support Page
    'support.title': 'Trung Tâm Hỗ Trợ',
    'support.subtitle': 'Chúng tôi luôn sẵn sàng giúp đỡ bạn',
    'support.faq': 'Câu Hỏi Thường Gặp',
    'support.contact': 'Liên Hệ',
    'support.chat': 'Trò Chuyện Trực Tiếp',
    'support.chat.desc': 'Nhận trợ giúp tức thì từ đội ngũ hỗ trợ',
    'support.chat.button': 'Bắt Đầu Trò Chuyện',
    'support.email': 'Hỗ Trợ Email',
    'support.email.desc': 'Gửi email cho chúng tôi, phản hồi trong 24 giờ',
    'support.email.button': 'Gửi Email',
    'support.form.title': 'Gửi Yêu Cầu Hỗ Trợ',
    'support.form.name': 'Tên của bạn',
    'support.form.email': 'Địa chỉ email',
    'support.form.subject': 'Chủ đề',
    'support.form.message': 'Mô tả vấn đề',
    'support.form.submit': 'Gửi Yêu Cầu',
    
    // About Page
    'about.title': 'Về GPlay',
    'about.subtitle': 'Tạo ra những trò chơi mang lại niềm vui cho hàng triệu người',
    'about.mission.title': 'Sứ Mệnh',
    'about.mission.text': 'Sứ mệnh của chúng tôi là tạo ra những trò chơi mà mọi người muốn chơi trong nhiều năm. Chúng tôi tập trung vào chất lượng hơn số lượng và luôn đặt người chơi lên hàng đầu.',
    'about.vision.title': 'Tầm Nhìn',
    'about.vision.text': 'Chúng tôi hình dung một tương lai nơi các trò chơi của chúng tôi mang mọi người lại gần nhau hơn, tạo ra những kỷ niệm đáng nhớ và truyền cảm hứng sáng tạo.',
    'about.values.title': 'Giá Trị',
    'about.journey.title': 'Hành Trình',
    'about.stats.games': 'Trò Chơi Phát Hành',
    'about.stats.players': 'Người Chơi Hàng Tháng',
    'about.stats.countries': 'Quốc Gia',
    'about.stats.employees': 'Nhân Viên',
  },
  en: {
    // Navigation
    'nav.games': 'Games',
    'nav.careers': 'Careers',
    'nav.support': 'Support',
    'nav.about': 'About Us',
    
    // Hero
    'hero.title': 'Creating Games That Are Loved Worldwide',
    'hero.subtitle': 'GPlay is a global game company headquartered in Vietnam. We make games that people want to play for years.',
    'hero.cta': 'Explore Games',
    'hero.players': 'Players',
    'hero.countries': 'Countries',
    
    // Featured Games
    'featured.title': 'Featured Games',
    'featured.subtitle': 'Discover amazing games loved by millions of players worldwide',
    'featured.play': 'Play Now',
    
    // Footer
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved by GPlay. Copyright registered.',
    
    // Games Page
    'games.title': 'Our Games',
    'games.subtitle': 'Discover our collection of amazing games loved by millions of players worldwide',
    'games.all': 'All',
    'games.action': 'Action',
    'games.strategy': 'Strategy',
    'games.puzzle': 'Puzzle',
    'games.downloads': 'Downloads',
    'games.rating': 'Rating',
    'games.download': 'Download',
    'games.preregister': 'Pre-Register',
    
    // Careers Page
    'careers.title': 'Career Opportunities',
    'careers.subtitle': 'Join our team of passionate people creating amazing games',
    'careers.openings': 'Open Positions',
    'careers.benefits': 'Benefits & Perks',
    'careers.location': 'Location',
    'careers.type': 'Type',
    'careers.apply': 'Apply Now',
    'careers.form.title': 'Apply for Position',
    'careers.form.name': 'Full Name',
    'careers.form.email': 'Email',
    'careers.form.position': 'Position',
    'careers.form.portfolio': 'Portfolio/LinkedIn',
    'careers.form.message': 'Message',
    'careers.form.submit': 'Submit Application',
    
    // Support Page
    'support.title': 'Support Center',
    'support.subtitle': 'We\'re here to help you',
    'support.faq': 'Frequently Asked Questions',
    'support.contact': 'Contact Us',
    'support.chat': 'Live Chat',
    'support.chat.desc': 'Get instant help from our support team',
    'support.chat.button': 'Start Chat',
    'support.email': 'Email Support',
    'support.email.desc': 'Send us an email, we\'ll respond within 24 hours',
    'support.email.button': 'Send Email',
    'support.form.title': 'Submit Support Request',
    'support.form.name': 'Your name',
    'support.form.email': 'Email address',
    'support.form.subject': 'Subject',
    'support.form.message': 'Describe your issue',
    'support.form.submit': 'Submit Request',
    
    // About Page
    'about.title': 'About GPlay',
    'about.subtitle': 'Creating games that bring joy to millions',
    'about.mission.title': 'Mission',
    'about.mission.text': 'Our mission is to create games that people want to play for years. We focus on quality over quantity and always put players first.',
    'about.vision.title': 'Vision',
    'about.vision.text': 'We envision a future where our games bring people closer together, create lasting memories, and inspire creativity.',
    'about.values.title': 'Values',
    'about.journey.title': 'Our Journey',
    'about.stats.games': 'Games Released',
    'about.stats.players': 'Monthly Players',
    'about.stats.countries': 'Countries',
    'about.stats.employees': 'Employees',
  },
};
