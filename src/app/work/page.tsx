import Link from 'next/link';
import WorkNav from '../components/workNav';

export default function Work({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>

  <div className='space-y-4'><WorkNav/></div>
<div>{children}</div>


    
    </>
  );
}