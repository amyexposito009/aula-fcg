import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Carrera - ${params.slug}`,
    description: `Información sobre la carrera ${params.slug}`
  };
}

export default function CareerPage({ params }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <h1 className="text-2xl font-bold text-gray-900">{params.slug}</h1>
      <p className="mt-2 text-sm text-gray-600">Página de carrera en desarrollo</p>
    </div>
  );
}
