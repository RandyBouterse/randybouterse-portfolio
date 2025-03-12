import { useState, useEffect } from "react";
import { Heart, Calendar } from "lucide-react";
import { Media, Update } from "@/data/updates";
import MediaCarousel from "./MediaCarousel";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface UpdateCardProps {
  update: Update;
  onLikeUpdate?: (id: string, likes: number) => void;
}

const UpdateCard = ({ update, onLikeUpdate }: UpdateCardProps) => {
  const [mediaViewerOpen, setMediaViewerOpen] = useState(false);
  const [initialMediaIndex, setInitialMediaIndex] = useState(0);
  
  // Check if this update was previously liked in localStorage
  const [liked, setLiked] = useState(() => {
    const likedUpdates = JSON.parse(localStorage.getItem('likedUpdates') || '{}');
    return likedUpdates[update.id] || false;
  });
  
  const [likesCount, setLikesCount] = useState(update.likes || 0);
  
  const formattedDate = format(new Date(update.date), "MMM d, yyyy");

  // Effect to save liked state to localStorage
  useEffect(() => {
    const likedUpdates = JSON.parse(localStorage.getItem('likedUpdates') || '{}');
    likedUpdates[update.id] = liked;
    localStorage.setItem('likedUpdates', JSON.stringify(likedUpdates));
  }, [liked, update.id]);

  const handleMediaClick = (index: number) => {
    setInitialMediaIndex(index);
    setMediaViewerOpen(true);
  };

  const handleLike = () => {
    const newLikesCount = liked ? likesCount - 1 : likesCount + 1;
    setLikesCount(newLikesCount);
    setLiked(!liked);
    
    // Call the callback to update the parent component
    if (onLikeUpdate) {
      onLikeUpdate(update.id, newLikesCount);
    }
  };

  // Function to format content with proper bullet points for the ProductCon update
  const formatContent = (content: string) => {
    // Check if this is the ProductCon update (id: '4')
    if (update.id === '4') {
      // For ProductCon update, format with bullet points
      if (content.includes("Visited ProductCon in London")) {
        // Extract the intro text (before the presentation list)
        const introText = content.split("Augmenting")[0].trim();
        
        // Extract all the presentations from the content
        const presentations = [
          "Augmenting Your Product's Value Proposition with AI by Debbie McMahon, CPO at Financial Times",
          "The Future of Product in 2025 by Carlos González De Villaumbrosia, Founder & CEO at Product School",
          "Product Localization Playbooks for International Expansion by Vinay Ramani, CPO at Tide (Ex-Meta, Google, Uber)",
          "Product & Culture Integration After M&A by Pénélope Carlier, VP of Product at TIER Dott",
          "Dismantling SAFe, Safely: Breaking Bureaucracy to Unlock True Agility by Simone Paul Tamussin, CPO at Mastercard Gateway",
          "Scaling & Monetizing Marketplaces by Carlos González De Villaumbrosia & Tanya Cordrey, CPO at Motorway",
          "Practical AI Use Cases for Product Leaders to 10x Impact Today by Dave Killeen, VP of Product at Pendo",
          "Don't Leave Money on the Table: Optimizing Payments to Reduce Churn by Chetan Pandya, SVP of Product at DAZN"
        ];
        
        // Return formatted JSX with bullet points
        return (
          <>
            <p className="mb-2">{introText}</p>
            <p className="mb-1">Great talks of Product Leaders with topics such as:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              {presentations.map((presentation, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-200">{presentation}</li>
              ))}
            </ul>
            <p className="text-gray-800 dark:text-gray-200 mt-2">#ProductManagement #Conference #Community</p>
          </>
        );
      }
    }
    
    // For all other updates, parse URLs in content and make them clickable
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    if (content.match(urlRegex)) {
      const parts = content.split(urlRegex);
      const elements = parts.map((part, index) => {
        if (part.match(urlRegex)) {
          return (
            <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {part}
            </a>
          );
        }
        return part;
      });
      return <p className="text-gray-800 dark:text-gray-200">{elements}</p>;
    }
    
    // Default return if no URLs found
    return <p className="text-gray-800 dark:text-gray-200">{content}</p>;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
      <div className="flex items-start space-x-3 mb-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/8f499ff8-b696-4c8e-98bf-8042bd2cbe0a.png" 
              alt="Randy Bouterse" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-bold text-gray-900 dark:text-white">Randy Bouterse</h4>
            <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">@randybouterse</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formattedDate} · {update.time}</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        {formatContent(update.content)}
      </div>

      {update.media && update.media.length > 0 && (
        <div className={cn(
          "grid gap-2 mb-3 rounded-xl overflow-hidden",
          update.media.length === 1 ? "grid-cols-1" : 
          update.media.length === 2 ? "grid-cols-2" : 
          "grid-cols-3"
        )}>
          {update.media.map((media: Media, index: number) => (
            <div 
              key={index} 
              className={cn(
                "relative cursor-pointer overflow-hidden",
                update.media && update.media.length === 1 ? "aspect-video" : "aspect-square"
              )}
              onClick={() => handleMediaClick(index)}
            >
              {media.type === "image" ? (
                <img 
                  src={media.url} 
                  alt={media.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video 
                  src={media.url} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center text-gray-500 dark:text-gray-400 space-x-6 pt-2 border-t border-gray-200 dark:border-gray-700">
        <button 
          className={cn(
            "flex items-center space-x-1 transition-colors",
            liked ? "text-red-500" : "hover:text-red-500"
          )}
          onClick={handleLike}
        >
          <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
          <span className="text-sm">{likesCount}</span>
        </button>
      </div>

      {update.media && (
        <MediaCarousel
          media={update.media}
          initialIndex={initialMediaIndex}
          isOpen={mediaViewerOpen}
          onClose={() => setMediaViewerOpen(false)}
        />
      )}
    </div>
  );
};

export default UpdateCard;
