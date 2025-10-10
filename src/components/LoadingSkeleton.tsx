import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadingSkeleton() {
  return (
    <div className="p-4">
      <Skeleton height={30} count={3} />
    </div>
  );
}
