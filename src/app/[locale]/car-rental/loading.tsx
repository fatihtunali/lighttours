import {
  HeroSkeleton,
  GridSkeleton,
  CarCardSkeleton,
  Skeleton,
} from "@/components/ui/Skeleton";

export default function CarRentalLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSkeleton />

      {/* Cars Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width={300} className="mx-auto" />
            <Skeleton variant="text" height={20} width={450} className="mx-auto" />
          </div>
          <GridSkeleton count={6} columns={3} CardComponent={CarCardSkeleton} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md space-y-4">
                <Skeleton variant="circular" width={56} height={56} />
                <Skeleton variant="text" height={24} width="70%" />
                <Skeleton variant="text" height={16} width="100%" />
                <Skeleton variant="text" height={16} width="85%" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
