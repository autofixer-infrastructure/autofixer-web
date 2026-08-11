import { Sidebar } from '@/components/admin/Sidebar';
import { ChatWidget } from '@/components/admin/ChatWidget';
import { MobileHeader } from '@/components/admin/MobileHeader';
import { DarkModeProvider } from '@/components/admin/DarkModeProvider';

export const metadata = {
  title: 'Panel · Autofixer',
  description: 'Panel de control y observabilidad del sitio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <MobileHeader />
          <main className="flex-1 p-4 md:p-8 overflow-auto">
            {children}
          </main>
        </div>
        <ChatWidget />
      </div>
    </DarkModeProvider>
  );
}
