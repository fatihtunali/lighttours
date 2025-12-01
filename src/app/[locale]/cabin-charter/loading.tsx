import {
  HeroSkeleton,
  Skeleton,
  FormSkeleton,
} from "@/components/ui/Skeleton";

export default function CabinCharterLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSkeleton />

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <Skeleton variant="text" height={36} width="80%" />
              <Skeleton variant="text" height={20} width="100%" />
              <Skeleton variant="text" height={20} width="90%" />
              <Skeleton variant="text" height={20} width="95%" />
              <div className="space-y-4 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton variant="circular" width={48} height={48} />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="text" height={20} width="60%" />
                      <Skeleton variant="text" height={16} width="80%" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Skeleton variant="text" height={28} width="60%" className="mb-6" />
              <FormSkeleton fields={6} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
