
import { useState, useMemo } from "react";
import { isSameDay, parseISO } from "date-fns";
import { Update, updates } from "@/data/updates";
import UpdateCard from "./UpdateCard";
import UpdateDatePicker from "./UpdateDatePicker";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestUpdates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const filteredUpdates = useMemo(() => {
    let filtered = [...updates]; // Create a copy to avoid mutations
    
    if (selectedDate) {
      filtered = filtered.filter(update => 
        isSameDay(parseISO(update.date), selectedDate)
      );
    }
    
    return filtered;
  }, [selectedDate, updates]);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleLatestUpdate = () => {
    if (updates.length > 0) {
      const sortedDates = [...updates]
        .map(update => new Date(update.date))
        .sort((a, b) => b.getTime() - a.getTime());
      
      setSelectedDate(sortedDates[0]);
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
                <UpdateCard key={update.id} update={update} />
              ))
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-500 dark:text-gray-400">No updates found</p>
                <div className="mt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedDate(undefined)}
                  >
                    Show all updates
                  </Button>
                </div>
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
              
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedDate(undefined)}
                  className="w-full"
                >
                  Show All Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
