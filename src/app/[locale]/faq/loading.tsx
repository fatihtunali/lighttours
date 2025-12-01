import { Skeleton } from "@/components/ui/Skeleton";

export default function FAQLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton variant="text" height={48} width={350} className="mx-auto bg-primary-500" />
          <Skeleton variant="text" height={24} width={450} className="mx-auto mt-4 bg-primary-500" />
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center">
                  <Skeleton variant="text" height={24} width={`${70 - (i % 3) * 10}%`} />
                  <Skeleton variant="circular" width={24} height={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
