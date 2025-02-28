
import { useState, useMemo } from "react";
import { isSameDay, parseISO } from "date-fns";
import { Update, updates } from "@/data/updates";
import UpdateCard from "./UpdateCard";
import UpdateDatePicker from "./UpdateDatePicker";

const LatestUpdates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Filter updates based on the selected date
  const filteredUpdates = useMemo(() => {
    if (!selectedDate) {
      return updates;
    }
    
    return updates.filter(update => 
      isSameDay(parseISO(update.date), selectedDate)
    );
  }, [selectedDate, updates]);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
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
                <p className="text-gray-500 dark:text-gray-400">No updates for this date</p>
              </div>
            )}
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <UpdateDatePicker 
                updates={updates}
                onSelectDate={handleSelectDate}
                selectedDate={selectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
