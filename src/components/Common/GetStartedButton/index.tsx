import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://calendly.com/shanilka/30min?month=2025-10"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a Call
    </LinkTo>
  );
};

export default GetStartedButton;
