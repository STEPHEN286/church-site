import React from 'react';
import { PlayIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const SermonCard = ({ title, preacher, date, scripture, description, videoUrl, audioUrl, thumbnail, isFeatured = false }) => {
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);
  const thumbnailUrl = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : thumbnail;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {isFeatured ? (
        <div className="relative w-full aspect-video">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="relative w-full aspect-video">
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/1280x720?text=No+Thumbnail';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <PlayIcon className="w-12 h-12 text-white" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full aspect-video">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1280x720?text=No+Thumbnail';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <PlayIcon className="w-12 h-12 text-white" />
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm font-medium">{preacher}</p>
          <p className="text-gray-500 text-sm">{date}</p>
          <p className="text-gray-600 text-sm mt-1">{scripture}</p>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="flex space-x-4">
          <button
            onClick={() => window.open(videoUrl, '_blank')}
            className="flex-1 flex items-center justify-center space-x-2 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <PlayIcon className="w-5 h-5" />
            <span>Watch on YouTube</span>
          </button>
          {audioUrl && (
            <button
              onClick={() => window.open(audioUrl, '_blank')}
              className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              <span>Download Audio</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SermonCard; 