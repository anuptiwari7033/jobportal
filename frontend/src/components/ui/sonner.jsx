import { Toaster as Sonner } from "sonner"
import { useTheme } from "next-themes"

const Toaster = (props) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-background text-foreground border border-border shadow-lg",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
