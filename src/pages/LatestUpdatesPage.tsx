
import { useState, useMemo } from "react";
import { isSameDay, parseISO } from "date-fns";
import { updates } from "@/data/updates";
import UpdateCard from "@/components/UpdateCard";
import UpdateDatePicker from "@/components/UpdateDatePicker";
import { ArrowUp, Circle, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const LatestUpdatesPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { theme, setTheme } = useTheme();

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
                  <UpdateCard key={update.id} update={update} />
                ))
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-gray-500 dark:text-gray-400">No updates found for this date</p>
                  <div className="mt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedDate(undefined)}
                    >
                      Reset date filter
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
                
                {selectedDate && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedDate(undefined)}
                      className="w-full"
                    >
                      Reset date filter
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestUpdatesPage;
