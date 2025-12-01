import { images } from "./images";

export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatar: string;
  };
}

export interface BlogPostContent {
  sections: {
    type: "paragraph" | "heading" | "list" | "quote" | "image";
    content?: string;
    items?: string[];
    imageUrl?: string;
    imageAlt?: string;
    imageCaption?: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-time-visit-fethiye",
    slug: "best-time-visit-fethiye",
    image: images.tours.fethiye,
    category: "travelGuide",
    date: "2024-11-28",
    readTime: 5,
    author: {
      name: "Mehmet Yilmaz",
      avatar: "/images/team/mehmet.jpg",
    },
  },
  {
    id: "12-islands-tour-guide",
    slug: "12-islands-tour-guide",
    image: images.yachts.gallery1,
    category: "tours",
    date: "2024-11-25",
    readTime: 7,
    author: {
      name: "Ayse Demir",
      avatar: "/images/team/ayse.jpg",
    },
  },
  {
    id: "blue-cruise-vs-yacht-charter",
    slug: "blue-cruise-vs-yacht-charter",
    image: images.services.yachtCharter,
    category: "yachtCharter",
    date: "2024-11-20",
    readTime: 6,
    author: {
      name: "Mehmet Yilmaz",
      avatar: "/images/team/mehmet.jpg",
    },
  },
  {
    id: "paragliding-oludeniz",
    slug: "paragliding-oludeniz",
    image: images.hero.main1,
    category: "activities",
    date: "2024-11-15",
    readTime: 4,
    author: {
      name: "Ali Kaya",
      avatar: "/images/team/ali.jpg",
    },
  },
  {
    id: "dalyan-mud-baths",
    slug: "dalyan-mud-baths",
    image: images.tours.fethiye,
    category: "dayTrips",
    date: "2024-11-10",
    readTime: 5,
    author: {
      name: "Zeynep Ozturk",
      avatar: "/images/team/zeynep.jpg",
    },
  },
  {
    id: "turkish-cuisine-fethiye",
    slug: "turkish-cuisine-fethiye",
    image: images.blog.post1,
    category: "foodCulture",
    date: "2024-11-05",
    readTime: 6,
    author: {
      name: "Ayse Demir",
      avatar: "/images/team/ayse.jpg",
    },
  },
];

export const categoryKeys = [
  "all",
  "travelGuide",
  "tours",
  "yachtCharter",
  "activities",
  "dayTrips",
  "foodCulture",
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return blogPosts.slice(0, limit);

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aScore = a.category === currentPost.category ? 1 : 0;
      const bScore = b.category === currentPost.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
