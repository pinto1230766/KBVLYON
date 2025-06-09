"use client"

import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useLanguage } from "@/hooks/useLanguage" // Ajout de useLanguage

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage() // Ajout pour obtenir la fonction de traduction

  // Éviter l'hydratation côté serveur
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          {theme === 'dark' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          <span className="sr-only">{t('iu.tema.mudar')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 border-2 shadow-lg bg-white dark:bg-zinc-950 z-[60]"> {/* Remplacé bg-popover par bg-white dark:bg-zinc-950 et ajouté z-[60] */}
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center justify-between"
        >
          <span>{t('iu.tema.claro')}</span>
          <Sun className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between"
        >
          <span>{t('iu.tema.sombrio')}</span>
          <Moon className="h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center justify-between"
        >
          <span>{t('iu.tema.sistema')}</span>
          <Laptop className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
