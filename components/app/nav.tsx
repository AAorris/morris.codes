import Link from "next/link";
import { adminFlag } from "@/flags";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";

export async function Nav() {
  const admin = await adminFlag()
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="font-mono">morris.codes</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {admin && (
          <NavigationMenuItem>
            <Link href="/admin" legacyBehavior passHref>
              <NavigationMenuLink className="font-mono text-600">admin</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}