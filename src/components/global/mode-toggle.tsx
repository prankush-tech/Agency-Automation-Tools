'use client'

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useplannerTheme } from "@/store/plannerStore"


export function ModeToggle() {
  const { setTheme } = useTheme()


  // const plannerTheme = useplannerTheme((state: any) => state.plannerTheme);
  const setLightTheme = useplannerTheme((state: any) => state.setLightTheme);
  const setDarkTheme = useplannerTheme((state: any) => state.setDarkTheme);

  const handleThemeDark = (themeMain: string) => {
    setDarkTheme()
    setTheme(themeMain)
  }
  const handleThemeLight = (themeMain: string) => {
    setLightTheme()
    setTheme(themeMain)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />

          <MoonIcon className="absolute  h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeDark('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeLight('light')}>
          Light
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}