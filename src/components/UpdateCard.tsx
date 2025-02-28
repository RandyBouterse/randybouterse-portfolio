
import { useState } from "react";
import { Heart, Calendar } from "lucide-react";
import { Media, Update } from "@/data/updates";
import MediaCarousel from "./MediaCarousel";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface UpdateCardProps {
  update: Update;
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  const [mediaViewerOpen, setMediaViewerOpen] = useState(false);
  const [initialMediaIndex, setInitialMediaIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(update.likes || 0);
  
  const formattedDate = format(new Date(update.date), "MMM d, yyyy");

  const handleMediaClick = (index: number) => {
    setInitialMediaIndex(index);
    setMediaViewerOpen(true);
  };

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
      <div className="flex items-start space-x-3 mb-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-sm font-bold">RB</span>
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
        <p className="text-gray-800 dark:text-gray-200">{update.content}</p>
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
