import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, SlidersHorizontal } from "lucide-react";

export default function ClothingAndShoes() {
  const products = [
    {
      id: 1,
      name: "WMX Rubber Zebra sandal",
      price: 36,
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500&h=500&fit=crop",
      colors: ["orange", "black"],
      category: "Shoes",
    },
    {
      id: 2,
      name: "Supper Skiny jogger in brown",
      price: 89,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&h=500&fit=crop",
      colors: ["yellow", "black"],
      category: "Clothing",
    },
    {
      id: 3,
      name: "Premium Wool Sweater",
      price: 125,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
      colors: ["beige", "gray"],
      category: "Clothing",
    },
    {
      id: 4,
      name: "Classic Running Shoes",
      price: 95,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      colors: ["white", "yellow"],
      category: "Shoes",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clothing and Shoes</h1>
          <p className="text-muted-foreground">Discover our latest collection</p>
        </div>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="clothing">Clothing</TabsTrigger>
          <TabsTrigger value="shoes">Shoes</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary">New Arrivals</Badge>
              <Badge variant="secondary">Popular</Badge>
              <Badge variant="secondary">Sale</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Price Range:</span>
              <div className="w-48">
                <Slider defaultValue={[0, 100]} max={500} step={1} />
              </div>
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group relative">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="font-bold">${product.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="clothing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === "Clothing")
              .map((product) => (
                <Card key={product.id} className="group relative">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="font-bold">${product.price}</span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="shoes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === "Shoes")
              .map((product) => (
                <Card key={product.id} className="group relative">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="font-bold">${product.price}</span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}