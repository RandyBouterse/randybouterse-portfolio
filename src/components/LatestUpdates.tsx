
import { useState, useMemo } from "react";
import { isSameDay, parseISO } from "date-fns";
import { updates } from "@/data/updates";
import UpdateCard from "./UpdateCard";
import UpdateDatePicker from "./UpdateDatePicker";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const UPDATES_PER_PAGE = 3;

const LatestUpdates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUpdates = useMemo(() => {
    let filtered = [...updates]; // Create a copy to avoid mutations
    
    if (selectedDate) {
      filtered = filtered.filter(update => 
        isSameDay(parseISO(update.date), selectedDate)
      );
    }
    
    return filtered;
  }, [selectedDate, updates]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredUpdates.length / UPDATES_PER_PAGE);
  const startIndex = (currentPage - 1) * UPDATES_PER_PAGE;
  const paginatedUpdates = filteredUpdates.slice(startIndex, startIndex + UPDATES_PER_PAGE);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setCurrentPage(1); // Reset to first page when date changes
  };

  const handleLatestUpdate = () => {
    if (updates.length > 0) {
      const sortedDates = [...updates]
        .map(update => new Date(update.date))
        .sort((a, b) => b.getTime() - a.getTime());
      
      setSelectedDate(sortedDates[0]);
      setCurrentPage(1); // Reset to first page
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Updates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 space-y-4">
            {paginatedUpdates.length > 0 ? (
              <>
                {paginatedUpdates.map(update => (
                  <UpdateCard key={update.id} update={update} />
                ))}
                
                {filteredUpdates.length > UPDATES_PER_PAGE && (
                  <div className="flex justify-between items-center mt-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Page {currentPage} of {totalPages}
                    </span>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
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
  );
};

export default LatestUpdates;
