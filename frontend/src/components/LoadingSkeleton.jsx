const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <div
          key={idx}
          className="h-80 w-full animate-pulse bg-gray-200 rounded-lg"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
