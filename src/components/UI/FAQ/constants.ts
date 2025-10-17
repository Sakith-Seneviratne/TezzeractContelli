type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How does Contelli integrate with my existing platforms?',
    answer:
      'Contelli seamlessly connects with Google Analytics, Search Console, Meta Ads, Facebook, Instagram, X, LinkedIn, Bluesky, and TikTok through secure API integrations. Simply authenticate your accounts and Contelli automatically syncs your data into one unified dashboard.',
  },
  {
    question: 'How does the AI-powered content generation work?',
    answer:
      "Contelli's AI analyzes your business objectives, industry trends, audience behavior, and historical content performance to generate tailored content ideas. The more you use Contelli, the smarter it becomes at understanding your unique brand voice and strategy.",
  },
  {
    question: 'Is my business data secure with Contelli?',
    answer:
      'Absolutely. Contelli uses enterprise-grade security measures including end-to-end encryption, secure API connections, and compliance with industry standards. Your data is protected and never shared with third parties.',
  },
  {
    question: 'Can multiple team members collaborate in Contelli?',
    answer:
      'Yes! Contelli is built for teams. You can add multiple users, assign roles and permissions, collaborate on content planning, and track performance together—all within one centralized platform.',
  },
];
