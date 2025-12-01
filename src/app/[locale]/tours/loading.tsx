import {
  HeroSkeleton,
  GridSkeleton,
  TourCardSkeleton,
  Skeleton,
} from "@/components/ui/Skeleton";

export default function ToursLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSkeleton />

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <Skeleton variant="text" height={40} width={300} className="mx-auto" />
            <Skeleton variant="text" height={20} width={500} className="mx-auto" />
          </div>
          <GridSkeleton count={6} columns={3} CardComponent={TourCardSkeleton} />
        </div>
      </section>
    </div>
  );
}
