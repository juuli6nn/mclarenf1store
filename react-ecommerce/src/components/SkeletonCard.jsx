const SkeletonCard = () => {
  return (
    <div className="card h-100 shadow-sm skeleton-card">
      {/* Image skeleton */}
      <div className="skeleton skeleton-image"></div>

      <div className="card-body d-flex flex-column">
        {/* Title skeleton */}
        <div className="skeleton skeleton-title mb-2"></div>

        {/* Rating skeleton */}
        <div className="skeleton skeleton-rating mb-2"></div>

        {/* Price skeleton */}
        <div className="skeleton skeleton-price mb-3"></div>

        {/* Button skeleton */}
        <div className="skeleton skeleton-button mt-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
