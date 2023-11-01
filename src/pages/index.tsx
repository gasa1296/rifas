import { Inter } from "next/font/google";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import Home from "@/components/Home";
const inter = Inter({ subsets: ["latin"] });
export default function HomePage() {
  return <Layout home={true}>
    <Home />
  </Layout>;
}
