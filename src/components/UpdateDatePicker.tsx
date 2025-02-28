
import { useState, useEffect, useMemo } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Update } from "@/data/updates";

interface UpdateDatePickerProps {
  updates: Update[];
  onSelectDate: (date: Date) => void;
  selectedDate?: Date;
}

const UpdateDatePicker = ({ updates, onSelectDate, selectedDate }: UpdateDatePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Get all dates that have updates
  const updateDates = useMemo(() => 
    updates.map(update => parseISO(update.date)), 
    [updates]
  );

  const daysInMonth = useMemo(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  // Count the number of updates per day (max 3)
  const getUpdatesCountForDate = (date: Date) => {
    const count = updateDates.filter(updateDate => 
      isSameDay(updateDate, date)
    ).length;
    
    return Math.min(count, 3); // Max 3 dots
  };

  const nextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  // Initialize with no selected date by default
  useEffect(() => {
    // No auto-selection behavior
  }, [updateDates, onSelectDate]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <h3 className="font-medium text-gray-900 dark:text-white">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <button 
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((day) => {
          const updatesCount = getUpdatesCountForDate(day);
          const hasUpdate = updatesCount > 0;
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const today = isToday(day);

          return (
            <button
              key={day.toISOString()}
              onClick={() => hasUpdate && onSelectDate(day)}
              className={cn(
                "h-8 w-8 flex flex-col items-center justify-center rounded-full text-sm relative",
                today && "font-bold",
                hasUpdate ? 
                  "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" : 
                  "cursor-default text-gray-400 dark:text-gray-600",
                isSelected && hasUpdate && "bg-primary text-white hover:bg-primary/90 dark:hover:bg-primary/90"
              )}
              disabled={!hasUpdate}
            >
              {day.getDate()}
              {hasUpdate && !isSelected && (
                <div className="absolute bottom-1 flex space-x-0.5">
                  {[...Array(updatesCount)].map((_, i) => (
                    <span 
                      key={i} 
                      className="w-1 h-1 rounded-full bg-primary"
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateDatePicker;
