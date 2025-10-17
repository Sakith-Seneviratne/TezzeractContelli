import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Contelli has transformed how our marketing team operates. The unified dashboard gives us real-time insights from all our platforms, and the AI-powered content suggestions have increased our engagement by 40%. We've eliminated hours of manual work.",
    person: 'Sarah Mitchell, CMO at TechVision',
    avatar: robert_fox,
  },
  {
    testimony:
      "As an e-commerce company managing multiple channels, Contelli has been a game-changer. Having all our analytics and content planning in one place means our team moves faster and makes smarter decisions. The ROI has been exceptional.",
    person: 'David Chen, Head of Digital Marketing',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "The AI content intelligence is remarkable. Contelli understands our brand voice and generates ideas that actually align with our business objectives. We've cut our content planning time in half while improving quality.",
    person: 'Jessica Rodriguez, Content Director',
    avatar: esther_howard,
  },
  {
    testimony:
      "As an e-commerce company managing multiple channels, Contelli has been a game-changer. Having all our analytics and content planning in one place means our team moves faster and makes smarter decisions. The ROI has been exceptional.",
    person: 'David Chen, Head of Digital Marketing',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Contelli has transformed how our marketing team operates. The unified dashboard gives us real-time insights from all our platforms, and the AI-powered content suggestions have increased our engagement by 40%. We've eliminated hours of manual work.",
    person: 'Sarah Mitchell, CMO at TechVision',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Trusted by innovative', 'enterprises'];
