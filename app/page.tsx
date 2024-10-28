import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6">
      {/* Main Content */}
      <div className="space-y-6">
        {/* Categories */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Explore</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button variant="secondary">All</Button>
              <Button variant="ghost">Men</Button>
              <Button variant="ghost">Women</Button>
            </div>
            <Button variant="outline">Filters</Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Featured Banner */}
        <Card className="bg-[#d1f5d3] dark:bg-emerald-900 p-8 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">GET UP TO 50% OFF</h3>
              <Button>Get Discount</Button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=350&h=250&fit=crop"
              alt="Fashion"
              className="rounded-xl"
            />
          </div>
        </Card>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          <Card className="p-4">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=350&h=350&fit=crop"
              alt="Product"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Sport Sneakers</h4>
                <p className="text-sm text-muted-foreground">Premium Collection</p>
              </div>
              <p className="font-bold">$89</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}