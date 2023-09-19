import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
    weight: "500",
    subsets: ["latin"]
});

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <Menu className="block md:hidden" />
                <Link href="/">
                    <span className={cn("hidden md:block texxxt-xl md:text-3xl font-bold text-primary", font.className)}>
                        SaaS AI Companion
                    </span>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button size="sm" variant="premium">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
        </nav>
    );
}

export default Navbar;