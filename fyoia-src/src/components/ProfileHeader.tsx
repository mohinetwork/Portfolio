'use client';
import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import * as React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import PortfolioStars from './PortfolioStars';

const DOB = new Date('2007-03-31');

function calculateAge(dob: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

interface ProfileHeaderProps {
  name?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    github?: string
    instagram?: string
  }
}

export default function ProfileHeader({
  name = "Mohit Gupta",
  title = "Developer • Builder • Web Dev",
  profileImage = "/pfp.jpg",
  socialLinks = {
    twitter: "https://x.com/lostingness",
    github: "https://github.com/lostingness/",
    instagram: "https://www.instagram.com/lostingness/",
  }
}: ProfileHeaderProps) {
  const age = calculateAge(DOB);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-col -mt-10">
      <div className="flex items-center justify-between mb-4 sm:ml-8 ml-4 sm:mr-8 mr-4">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 rounded-full overflow-hidden bg-cover bg-center shrink-0 ring-4 ring-white dark:ring-white shadow-lg"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
        <PortfolioStars />
      </div>
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div className="px-0">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="font-[family-name:var(--font-instrument-serif)] italic text-2xl sm:text-4xl tracking-[0.01em] font-medium">
              {name}
            </h1>
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full px-2 py-0.5 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Available
            </span>
          </div>
          <p className="opacity-40 text-xs sm:text-sm">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start gap-1 sm:gap-2 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full" href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ WebkitTapHighlightColor: 'transparent', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}>
                    <FaGithub className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.twitter && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={{ WebkitTapHighlightColor: 'transparent', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}>
                    <FaXTwitter className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.instagram && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ WebkitTapHighlightColor: 'transparent', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}>
                    <FaInstagram className="text-[16px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>
          )}
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-8 h-8 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <button
                    onClick={() => {
                      const newTheme = theme === 'light' ? 'dark' : 'light'
                      if (typeof document !== "undefined" && "startViewTransition" in document) {
                        ;(document as Document & { startViewTransition: (callback: () => void) => void }).startViewTransition(() => { setTheme(newTheme) })
                      } else {
                        setTheme(newTheme)
                      }
                    }}
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                    style={{ WebkitTapHighlightColor: 'transparent', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
                  >
                    {theme === 'light' ? <Moon className="size-[14px] -mt-px" aria-hidden="true" /> : <Sun className="size-[14px] -mt-px" aria-hidden="true" />}
                  </button>
                </div>
              </TooltipTrigger>
              <TooltipContent>{theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}
