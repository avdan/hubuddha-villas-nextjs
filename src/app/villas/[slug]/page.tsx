import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVillaBySlug, getAllVillaSlugs, getAllVillas } from "@/lib/queries";
import VillaDetailClient from "./VillaDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllVillaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const villa = await getVillaBySlug(slug);

  if (!villa) {
    return {
      title: "Villa Not Found | Hubuddha Villas",
    };
  }

  return {
    title: `${villa.title} | Hubuddha Villas`,
    description: villa.villaDetails.shortDescription || villa.villaDetails.tagline || undefined,
  };
}

export default async function VillaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const villa = await getVillaBySlug(slug);

  if (!villa) {
    notFound();
  }

  // Fetch other villas for the "Other Villas" section
  const allVillas = await getAllVillas();
  const otherVillas = allVillas.filter((v) => v.slug !== slug);

  return <VillaDetailClient villa={villa} otherVillas={otherVillas} />;
}
