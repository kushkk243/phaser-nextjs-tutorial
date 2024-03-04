import Image from "next/image";
import dynamic from "next/dynamic";
const Dynamicload= dynamic(() => import('./components/phaserLoad'), {ssr: false});
export default function Home() {
  return (
    <main>
      <Dynamicload/>
    </main>
  );
}
