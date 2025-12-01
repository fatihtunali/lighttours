import { Skeleton, CardSkeleton, GridSkeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton variant="text" height={48} width={200} className="mx-auto bg-primary-500" />
          <Skeleton variant="text" height={24} width={400} className="mx-auto mt-4 bg-primary-500" />
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GridSkeleton count={6} columns={3} CardComponent={CardSkeleton} />
        </div>
      </section>
    </div>
  );
}
