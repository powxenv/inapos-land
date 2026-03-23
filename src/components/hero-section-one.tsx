import heroImage from '../assets/hero.png'
import { Button } from './ui/button'
import { HeroHeader } from './header'
import { ChevronRight, CirclePlay } from 'lucide-react'

const featureHighlights = [
    'Fast checkout',
    'Stock tracking',
    'Purchase records',
    'Cash & expense logs',
    'Simple reports',
    'Device sync',
    'Team access',
    'AI-first workflow',
]

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section id="features" className="bg-linear-to-b to-muted from-background">
                    <div className="relative py-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-xl text-balance text-5xl font-medium md:text-6xl">INAPOS, the store operations workspace for modern retail</h1>
                                    <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">Built for small shops, kiosks, and warungs that need checkout, stock control, reporting, device sync, and AI-assisted workflows in one place.</p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5">
                                            <a href="#/auth/sign-up">
                                                <span className="text-nowrap">Get Started</span>
                                                <ChevronRight className="opacity-50" />
                                            </a>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="pl-5">
                                            <a href="https://youtu.be/L3afD7hKCS0">
                                                <CirclePlay className="fill-primary/25 stroke-primary" />
                                                <span className="text-nowrap">Watch demo</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <p className="text-muted-foreground">Core features:</p>
                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        {featureHighlights.map((feature) => (
                                            <span
                                                key={feature}
                                                className="text-foreground/80 rounded-full border px-4 py-2 text-sm font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1">
                                    <img
                                        src={heroImage}
                                        alt="app screen"
                                        className="size-full object-cover object-left-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
