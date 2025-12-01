import {
  HeroSkeleton,
  TransferRouteSkeleton,
  Skeleton,
} from "@/components/ui/Skeleton";

export default function TransferLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSkeleton />

      {/* Routes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width={350} className="mx-auto" />
            <Skeleton variant="text" height={20} width={500} className="mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <TransferRouteSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-3">
                <Skeleton variant="circular" width={64} height={64} className="mx-auto" />
                <Skeleton variant="text" height={20} width="70%" className="mx-auto" />
                <Skeleton variant="text" height={14} width="90%" className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
