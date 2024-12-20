'use client'

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, RocketIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          浅色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          深色
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          系统
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (currentScrollY / (documentHeight - windowHeight)) * 100

      if (scrollPercentage > 30) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="backdrop-blur-sm bg-card/80 shadow-md dark:shadow-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-foreground">
              我的博客
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/projects" className="text-foreground/80 hover:text-foreground transition-colors flex items-center">
                <RocketIcon className="mr-2 h-4 w-4" />
                项目
              </Link>
              <Link href="/blog" className="text-foreground/80 hover:text-foreground transition-colors flex items-center">
                <FileTextIcon className="mr-2 h-4 w-4" />
                博客
              </Link>
              <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors flex items-center">
                <PersonIcon className="mr-2 h-4 w-4" />
                关于
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
