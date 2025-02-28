import { useState, useMemo } from "react";
import { isSameDay, parseISO } from "date-fns";
import { Update, updates } from "@/data/updates";
import UpdateCard from "./UpdateCard";
import UpdateDatePicker from "./UpdateDatePicker";
import { ArrowUp, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

const LatestUpdates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);

  const allHashtags = useMemo(() => getAllHashtags(updates), [updates]);

  const filteredUpdates = useMemo(() => {
    let filtered = updates;
    
    if (selectedDate) {
      filtered = filtered.filter(update => 
        isSameDay(parseISO(update.date), selectedDate)
      );
    }
    
    if (selectedHashtag) {
      filtered = filtered.filter(update => 
        extractHashtags(update.content).includes(selectedHashtag)
      );
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
    if (selectedHashtag === hashtag) {
      setSelectedHashtag(null);
    } else {
      setSelectedHashtag(hashtag);
      setSelectedDate(undefined);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Updates</h2>
        
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
  );
};

export default LatestUpdates;
