"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  animation = "pulse",
}: SkeletonProps) {
  const baseStyles = "bg-gray-200 dark:bg-gray-700";

  const variantStyles = {
    text: "rounded",
    circular: "rounded-full",
    rectangular: "",
    rounded: "rounded-lg",
  };

  const animationStyles = {
    pulse: "animate-pulse",
    wave: "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]",
    none: "",
  };

  const style: React.CSSProperties = {
    width: width ?? (variant === "text" ? "100%" : undefined),
    height: height ?? (variant === "text" ? "1em" : undefined),
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

// Card skeleton for tours, yachts, etc.
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton variant="rectangular" height={200} className="w-full" />
      <div className="p-4 space-y-3">
        <Skeleton variant="text" height={24} width="70%" />
        <Skeleton variant="text" height={16} width="100%" />
        <Skeleton variant="text" height={16} width="80%" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton variant="text" height={20} width="30%" />
          <Skeleton variant="rounded" height={36} width={100} />
        </div>
      </div>
    </div>
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-gray-200 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4 px-4">
          <Skeleton variant="text" height={48} width={300} className="mx-auto" />
          <Skeleton variant="text" height={24} width={400} className="mx-auto" />
          <Skeleton variant="rounded" height={48} width={200} className="mx-auto mt-4" />
        </div>
      </div>
    </div>
  );
}

// Service card skeleton
export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <Skeleton variant="circular" width={64} height={64} />
      <Skeleton variant="text" height={24} width="60%" />
      <Skeleton variant="text" height={16} width="100%" />
      <Skeleton variant="text" height={16} width="90%" />
    </div>
  );
}

// Tour card skeleton
export function TourCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton variant="rectangular" height={220} className="w-full" />
      <div className="p-5 space-y-3">
        <Skeleton variant="text" height={28} width="80%" />
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" height={16} width="40%" />
        </div>
        <Skeleton variant="text" height={16} width="100%" />
        <Skeleton variant="text" height={16} width="70%" />
        <div className="flex justify-between items-center pt-3">
          <div>
            <Skeleton variant="text" height={14} width={60} />
            <Skeleton variant="text" height={24} width={80} />
          </div>
          <Skeleton variant="rounded" height={40} width={120} />
        </div>
      </div>
    </div>
  );
}

// Transfer route skeleton
export function TransferRouteSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" height={24} width="50%" />
          <div className="flex items-center gap-2">
            <Skeleton variant="circular" width={16} height={16} />
            <Skeleton variant="text" height={16} width="30%" />
          </div>
        </div>
        <div className="text-right space-y-2">
          <Skeleton variant="text" height={14} width={60} />
          <Skeleton variant="text" height={28} width={80} />
        </div>
      </div>
    </div>
  );
}

// Car card skeleton
export function CarCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton variant="rectangular" height={180} className="w-full" />
      <div className="p-5 space-y-3">
        <Skeleton variant="text" height={24} width="70%" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton variant="text" height={16} width="80%" />
          <Skeleton variant="text" height={16} width="60%" />
          <Skeleton variant="text" height={16} width="70%" />
          <Skeleton variant="text" height={16} width="50%" />
        </div>
        <div className="flex justify-between items-center pt-3">
          <div>
            <Skeleton variant="text" height={14} width={50} />
            <Skeleton variant="text" height={24} width={70} />
          </div>
          <Skeleton variant="rounded" height={40} width={100} />
        </div>
      </div>
    </div>
  );
}

// Table row skeleton
export function TableRowSkeleton({ columns = 4 }: { columns?: number }) {
  return (
    <tr className="border-b">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="p-4">
          <Skeleton variant="text" height={20} width={i === 0 ? "80%" : "60%"} />
        </td>
      ))}
    </tr>
  );
}

// Form skeleton
export function FormSkeleton({ fields = 4 }: { fields?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton variant="text" height={16} width={100} />
          <Skeleton variant="rounded" height={44} width="100%" />
        </div>
      ))}
      <Skeleton variant="rounded" height={48} width={150} className="mt-4" />
    </div>
  );
}

// Grid skeleton wrapper
export function GridSkeleton({
  count = 6,
  columns = 3,
  CardComponent = CardSkeleton,
}: {
  count?: number;
  columns?: 2 | 3 | 4;
  CardComponent?: React.ComponentType;
}) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <CardComponent key={i} />
      ))}
    </div>
  );
}

// Page skeleton
export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <Skeleton variant="text" height={36} width={300} className="mx-auto" />
          <Skeleton variant="text" height={20} width={500} className="mx-auto" />
        </div>
        <GridSkeleton count={6} columns={3} />
      </div>
    </div>
  );
}
