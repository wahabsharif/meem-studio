import BlurFade from "@/components/magicui/blur-fade";

export function Banner() {
  return (
    <section className="p-4 text-center">
      <div className="shadow-md bg-opacity-80 rounded-xl backdrop-blur-2xl backdrop-saturate-200 mx-auto max-w-4xl p-6">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter my-10">
            A dedicated squad
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-md text-pretty tracking-tighter">
            A capable team and effective design provide us with the opportunity
            to achieve outstanding results. Our team&apos;s core values are
            responsibility and punctuality. We will ensure your comfort
            throughout all stages of collaboration, from design to
            implementation!
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
