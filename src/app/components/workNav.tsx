import Link from 'next/link';

export default function WorkNav() {

    return (
<div className="space-x-8">
      <Link href="/work/music" className="text-2xl inline-block subNavActive">Music</Link>
      <Link href="/work/mixing" className="text-2xl inline-block subNavInActive">Mixing & Mastering</Link>
      <Link href="/work/editing" className="text-2xl inline-block subNavInActive">Editing </Link>
    </div>
    )
  }
  