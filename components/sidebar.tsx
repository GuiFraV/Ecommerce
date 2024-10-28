"use client";

import { Zap, ShoppingBag, Gift, Lightbulb, Plus, UserPlus, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: Zap, label: "Popular Products", href: "/" },
    { icon: ShoppingBag, label: "Clothing and Shoes", href: "/clothing-and-shoes" },
    { icon: Gift, label: "Gifts and Living", href: "/gifts-and-living" },
    { icon: Lightbulb, label: "Inspiration", href: "/inspiration" },
  ];

  const quickActions = [
    { icon: Plus, label: "Request for product" },
    { icon: UserPlus, label: "Add member" },
  ];

  return (
    <div className="w-64 h-full border-r p-6 flex flex-col">
      <Link href="/" className="font-bold text-2xl mb-8">BuyMore</Link>
      
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <h3 className="text-sm font-medium mb-4">Quick actions</h3>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}