import type {Metadata} from 'next';
import { AppProvider } from '@/lib/context';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Swarojagar Training Center - CTEVT IT & Vocational Courses in Itahari',
  description: 'Swarojagar Training Center in Itahari-06 Pragati Chowk, Sunsari, offers expert certified vocational programs in AC & Refrigerator Repair, Computer Software IT, Culinary Cook training, Tailoring, and Industrial Wiring. Affiliated with CTEVT, Government of Nepal.',
  keywords: 'Swarojagar Training Center, Itahari, Sunsari, CTEVT courses, vocational training, Fridge repair, AC repair, Computer training, cook training, sewing tailoring, Itahari progress chowk',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
