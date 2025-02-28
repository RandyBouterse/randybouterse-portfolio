
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Media } from "@/data/updates";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MediaCarouselProps {
  media: Media[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const MediaCarousel = ({ media, initialIndex = 0, isOpen, onClose }: MediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none">
        <div className="relative w-full h-full">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 bg-black/60 rounded-full p-1 text-white hover:bg-black/80 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative flex items-center justify-center h-[80vh]">
            {media.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 z-10 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            <div className="h-full w-full flex items-center justify-center">
              {media[currentIndex].type === "image" ? (
                <img
                  src={media[currentIndex].url}
                  alt={media[currentIndex].alt}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <video
                  src={media[currentIndex].url}
                  controls
                  className="max-h-full max-w-full"
                />
              )}
            </div>

            {media.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 z-10 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}
          </div>

          {media.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {media.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  )}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaCarousel;
