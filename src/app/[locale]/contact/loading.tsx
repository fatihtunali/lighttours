import { Skeleton, FormSkeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton variant="text" height={48} width={300} className="mx-auto bg-primary-500" />
          <Skeleton variant="text" height={24} width={400} className="mx-auto mt-4 bg-primary-500" />
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Skeleton variant="text" height={32} width="60%" />
              <Skeleton variant="text" height={18} width="90%" />
              <Skeleton variant="text" height={18} width="85%" />

              <div className="space-y-6 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Skeleton variant="circular" width={48} height={48} />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="text" height={18} width="40%" />
                      <Skeleton variant="text" height={16} width="70%" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Skeleton variant="text" height={28} width="50%" className="mb-6" />
              <FormSkeleton fields={5} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 animate-pulse" />
    </div>
  );
}
