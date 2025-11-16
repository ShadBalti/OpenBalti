import Link from "next/link";

interface ContinueLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface LearnContinueProps {
  title?: string;
  links: ContinueLink[];
}

export default function LearnContinue({
  title = "Continue Learning",
  links,
}: LearnContinueProps) {
  /**
   * Renders a "Continue Learning" section with a title and a set of navigation links.
   * This component is designed to guide users to other relevant learning pages from a lesson page.
   *
   * @param {LearnContinueProps} props - The component props.
   * @param {string} [props.title="Continue Learning"] - The title of the section.
   * @param {ContinueLink[]} props.links - An array of link objects to be displayed as buttons.
   * @returns {JSX.Element} The rendered "Continue Learning" section.
   */
  return (
    <section className="bg-gray-950 py-16 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-white">{title}</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`px-6 py-3 rounded-xl transition text-white ${
              link.variant === "secondary"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}