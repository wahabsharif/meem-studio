import BlurFade from "@/components/magicui/blur-fade";

export function Banner() {
  return (
    <section className="p-4 text-center">
      <div className="shadow-md bg-opacity-80 rounded-xl backdrop-blur-2xl backdrop-saturate-200 mx-auto max-w-4xl p-6">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter my-10">
            About Us
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-md text-pretty tracking-tighter">
            Meem Studio is a contemporary design studio based in Tashkent, with
            a global reach. We view each client meeting as a chance to discover
            their preferences, generate innovative ideas, and integrate that
            insight into our projects, ensuring results that exceed their
            expectations.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
