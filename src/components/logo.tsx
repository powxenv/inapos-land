import logoAsset from "../assets/logo.svg"
import { cn } from "../lib/utils"

type LogoProps = {
  className?: string
  uniColor?: boolean
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img src={logoAsset} alt="INAPOS logo" className="h-9 w-9" />
      <span className="text-foreground text-lg font-semibold">
        INAPOS
      </span>
    </div>
  )
}

export const LogoIcon = ({ className }: LogoProps) => {
  return <img src={logoAsset} alt="INAPOS logo" className={cn("h-9 w-9", className)} />
}
