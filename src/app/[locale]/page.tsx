'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from '@/i18n/routing';
import { useTheme } from '@/managers/ThemeManager/context';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

const ABox = styled.a`
  color: var(--mantine-color-primary-6);
  border: 1px solid var(--mantine-color-primary-6);
`;

const _StyledButton = styled(Button)`
  color: black;

  [data-mantine-color-scheme='dark'] & {
    color: white;
  }
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

export default function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const router = useRouter();
  const { colorScheme, setColorScheme, setPrimaryColor } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">{t('title')}</li>
          <li className="mb-2">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className="flex flex-row gap-4 items-center">
          <button
            className={clsx('cursor-pointer', locale === 'en' && 'text-green-600')}
            onClick={() => {
              router.replace('/', { locale: 'en' });
            }}
          >
            en
          </button>
          <button
            className={clsx('cursor-pointer', locale === 'zh' && 'text-green-600')}
            onClick={() => {
              router.replace('/', { locale: 'zh' });
            }}
          >
            zh
          </button>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button
            variant={colorScheme === 'auto' ? 'filled' : 'outline'}
            onClick={() => {
              setColorScheme('auto');
            }}
          >
            auto
          </Button>
          <Button
            variant={colorScheme === 'light' ? 'filled' : 'outline'}
            onClick={() => {
              setColorScheme('light');
            }}
          >
            light
          </Button>
          <Button
            variant={colorScheme === 'dark' ? 'filled' : 'outline'}
            onClick={() => {
              setColorScheme('dark');
            }}
          >
            dark
          </Button>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <StyledButton
            variant="outline"
            onClick={() => {
              setPrimaryColor('teal');
            }}
          >
            Primary Teal
          </StyledButton>
          <StyledButton
            variant="outline"
            onClick={() => {
              setPrimaryColor('violet');
            }}
          >
            Primary Violet
          </StyledButton>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ABox
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="invert dark:invert-0" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </ABox>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('about')}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}