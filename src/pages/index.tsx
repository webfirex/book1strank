import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-red-700 text-center font-black text-4xl max-[600px]:text-3xl max-[600px]:bg-yellow-300 max-[600px]:py-5">Join Our Telegram Channel & Win Crores</h1>
        <p className="text-red-700 text-center font-extrabold text-xl">आप <b>Telegran Channel</b> join कर लो 1st Rank आज ही जीता दूंगा ।</p>
        <video controls className="rounded-lg border w-full ">
          <source src="hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Link className="w-full min-[600px]:max-w-[400px] flex justify-center items-center" href='https://t.me/+5g_UApTSafViYmU1'>
          <img src="tgbtn.webp" alt="button" className="w-full animate-scaleBtn" />
        </Link>
      </div>
    </main>
  );
}
