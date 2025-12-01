import { Skeleton } from "@/components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton variant="text" height={48} width={250} className="mx-auto bg-primary-500" />
          <Skeleton variant="text" height={24} width={350} className="mx-auto mt-4 bg-primary-500" />
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Skeleton variant="rounded" height={400} className="w-full" />
            <div className="space-y-4">
              <Skeleton variant="text" height={36} width="70%" />
              <Skeleton variant="text" height={18} width="100%" />
              <Skeleton variant="text" height={18} width="95%" />
              <Skeleton variant="text" height={18} width="90%" />
              <Skeleton variant="text" height={18} width="85%" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton variant="text" height={36} width={200} className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center space-y-4">
                <Skeleton variant="circular" width={64} height={64} className="mx-auto" />
                <Skeleton variant="text" height={24} width="60%" className="mx-auto" />
                <Skeleton variant="text" height={16} width="90%" className="mx-auto" />
                <Skeleton variant="text" height={16} width="80%" className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton variant="text" height={36} width={200} className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4">
                <Skeleton variant="circular" width={150} height={150} className="mx-auto" />
                <Skeleton variant="text" height={20} width="70%" className="mx-auto" />
                <Skeleton variant="text" height={16} width="50%" className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
