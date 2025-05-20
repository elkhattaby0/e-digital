import HeaderOne from "@/component/HeaderOne";
import HeaderTwo from "@/component/HeaderTwo";
import HighlightColor from "@/component/HighlightColor";
import Paragraph from "@/component/Paragraph";

export const metadata = {
  title: "404 | Trusted Web Agency",
  description: "Page not found — Trusted Web Agency. The page you're looking for might have been moved, deleted, or never existed.",
};

export default function NotFound() {
  return (
    <section className={Style.container}>
      <div className={Style.section}>
        <HeaderOne>
          <HighlightColor>404</HighlightColor>
        </HeaderOne>
        <HeaderTwo>Oops! This page doesn’t exist.</HeaderTwo>
        <Paragraph>
          It looks like the page you’re trying to access has been moved or no longer exists.
        </Paragraph>
        <Paragraph>
          Please return to the homepage or contact our team if you need help.
        </Paragraph>
      </div>
    </section>
  );
}

const Style = {
  container: "w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D]",
  section: "w-11/12 flex flex-col items-center justify-center h-[calc(100lvh-80px)] max-md:h-fit text-center",
};
