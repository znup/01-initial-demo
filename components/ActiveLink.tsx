import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
