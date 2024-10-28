"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-4">
          <Button variant="secondary" className="text-2xl font-bold">37</Button>
          <div>
            <div className="font-medium">Orders</div>
            <div className="text-sm text-muted-foreground">Last 7 days</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button variant="outline">Dashboard</Button>
            <Button variant="ghost">Website</Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Ryana</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}