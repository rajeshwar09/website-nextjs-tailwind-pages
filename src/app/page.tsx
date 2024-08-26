import CardOne from "@/components/CardOne";
import PageFive from "@/components/PageFive";
import PageFour from "@/components/PageFour";
import PageOne from "@/components/PageOne";
import PageThree from "@/components/PageThree";
import PageTwo from "@/components/PageTwo";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        {/* <PageFive /> */}
    </>
  );
}
