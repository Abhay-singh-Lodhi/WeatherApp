
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { toast } from "sonner";

interface SearchBoxProps {
  onSearch: (city: string) => Promise<void>;
  isLoading: boolean;
}

export function SearchBox({ onSearch, isLoading }: SearchBoxProps) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    try {
      await onSearch(city);
      setCity("");
    } catch (error) {
      // Error is handled by the parent component
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pl-10 h-11 bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-11 px-5"
        >
          {isLoading ? (
            <>
              <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent border-white rounded-full"></div>
              Searching...
            </>
          ) : (
            'Search'
          )}
        </Button>
      </form>
    </div>
  );
}
