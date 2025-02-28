
import { useState, useMemo, useEffect } from "react";
import { isSameDay, parseISO } from "date-fns";
import { Update, updates } from "@/data/updates";
import UpdateCard from "@/components/UpdateCard";
import UpdateDatePicker from "@/components/UpdateDatePicker";
import { ArrowUp, Circle, Sun, Moon, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";

const extractHashtags = (content: string): string[] => {
  const hashtagRegex = /#(\w+)/g;
  const matches = content.match(hashtagRegex);
  if (!matches) return [];
  return matches.map(tag => tag.substring(1));
};

const getAllHashtags = (updates: Update[]): string[] => {
  const allTags: string[] = [];
  updates.forEach(update => {
    const tags = extractHashtags(update.content);
    tags.forEach(tag => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });
  return allTags;
};

const LatestUpdatesPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const allHashtags = useMemo(() => getAllHashtags(updates), [updates]);

  const filteredUpdates = useMemo(() => {
    let filtered = [...updates]; // Create a copy to avoid mutations
    
    if (selectedDate) {
      filtered = filtered.filter(update => 
        isSameDay(parseISO(update.date), selectedDate)
      );
    }
    
    if (selectedHashtag) {
      filtered = filtered.filter(update => {
        const updateTags = extractHashtags(update.content);
        return updateTags.includes(selectedHashtag);
      });
    }
    
    return filtered;
  }, [selectedDate, selectedHashtag, updates]);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedHashtag(null);
  };

  const handleLatestUpdate = () => {
    if (updates.length > 0) {
      const sortedDates = [...updates]
        .map(update => new Date(update.date))
        .sort((a, b) => b.getTime() - a.getTime());
      
      setSelectedDate(sortedDates[0]);
      setSelectedHashtag(null);
    }
  };

  const handleHashtagClick = (hashtag: string) => {
    console.log("Hashtag clicked in LatestUpdatesPage:", hashtag);
    if (selectedHashtag === hashtag) {
      setSelectedHashtag(null);
    } else {
      setSelectedHashtag(hashtag);
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-foreground relative transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Circle className="w-8 h-8 absolute" />
              <span className="absolute inset-0 flex items-center justify-center font-bold text-sm">
                RB
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">About</a>
            <a href="/portfolio" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">Portfolio</a>
            <a href="/latest-updates" className="text-sm font-medium border-b-2 border-primary">Latest Updates</a>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-black dark:text-white" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-white" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-32">
        <div className="container px-4 mx-auto pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Latest Updates</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2 space-y-4">
              {filteredUpdates.length > 0 ? (
                filteredUpdates.map(update => (
                  <UpdateCard key={update.id} update={update} onHashtagClick={handleHashtagClick} />
                ))
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-gray-500 dark:text-gray-400">No updates found</p>
                  {selectedHashtag && (
                    <div className="mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setSelectedHashtag(null)}
                      >
                        Clear hashtag filter
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Click on the date with dots to see the activities
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLatestUpdate}
                    className="flex items-center gap-1"
                  >
                    <ArrowUp className="h-4 w-4" />
                    Latest
                  </Button>
                </div>
                <UpdateDatePicker 
                  updates={updates}
                  onSelectDate={handleSelectDate}
                  selectedDate={selectedDate}
                />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Hash className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-medium">Filter by hashtag</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allHashtags.map(hashtag => (
                      <Badge 
                        key={hashtag}
                        variant={selectedHashtag === hashtag ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => handleHashtagClick(hashtag)}
                      >
                        #{hashtag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestUpdatesPage;
