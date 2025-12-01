import {
  HeroSkeleton,
  GridSkeleton,
  CardSkeleton,
  Skeleton,
} from "@/components/ui/Skeleton";

export default function YachtCharterLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSkeleton />

      {/* Yachts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width={350} className="mx-auto" />
            <Skeleton variant="text" height={20} width={450} className="mx-auto" />
          </div>
          <GridSkeleton count={6} columns={3} CardComponent={CardSkeleton} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-4">
                <Skeleton variant="circular" width={80} height={80} className="mx-auto" />
                <Skeleton variant="text" height={24} width={150} className="mx-auto" />
                <Skeleton variant="text" height={16} width="80%" className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
