import Link from 'next/link';


export default function NavBar() {

    return (
    <nav className="flex space-x-8">
        <Link href="/work" className="text-2xl inline-block navActive">Work</Link>
        <Link href="/market" className="text-2xl inline-block navInActive">Marketplace</Link>
    </nav>
    )
  }
  