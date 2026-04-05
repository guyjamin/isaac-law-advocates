'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { WhatsAppIcon } from '@/components/whatsapp-widget'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Practice Areas', href: '#practice-areas' },
  { name: 'Team', href: '#team' },
  { name: 'Clients', href: '#clients' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setMobileMenuOpen(false);
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    setTimeout(() => {
      navigation.forEach((item) => {
        const id = item.href.substring(1)
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      })
    }, 100)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5" onClick={(e) => handleNavClick(e, '#home')}>
            <Image
              src={theme === 'dark' ? '/LogoWhite.png' : '/LogoDark.png'}
              alt="Isaac Law Advocates LLP"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </a>
        </div>
        <div className="flex lg:hidden gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium leading-6 transition-colors",
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
              </a>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button asChild variant="default" className="gap-2">
            <a href="https://api.whatsapp.com/send?phone=254727554556" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5" onClick={(e) => handleNavClick(e, '#home')}>
                <Image
                  src={theme === 'dark' ? '/LogoWhite.png' : '/LogoDark.png'}
                  alt="Isaac Law Advocates LLP"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {item.name}
                      </a>
                    )
                  })}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full gap-2">
                    <a href="https://api.whatsapp.com/send?phone=254727554556" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
