import Image from "next/image";
import {Inter} from "next/font/google";
import {useTranslation} from "react-i18next";
import {selectAuthState} from "@/store/slices/auth";
import {useSelector} from "react-redux";
const inter = Inter({subsets: ["latin"]});
export default function Home() {
  const {t} = useTranslation();

  return <main className={` text-bg-danger  `}>hii</main>;
}
