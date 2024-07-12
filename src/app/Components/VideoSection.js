const VideoSection = ({ videoUrl, description }) => (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <video src={videoUrl} controls className="rounded-lg shadow-lg w-full max-w-xl"></video>
      <p className="text-lg text-white-700 mt-4">{description}</p>
    </div>
  );
  
  export default VideoSection;
  