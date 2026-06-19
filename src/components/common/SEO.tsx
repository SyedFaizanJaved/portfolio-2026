import { Helmet } from "react-helmet-async";
import { SITE } from "@/constants/site";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

export function SEO({
  title,
  description = SITE.description,
  path = "/",
  image = "/og-image.png",
  type = "website",
}: SEOProps) {
  const fullTitle = title
    ? `${title} — ${SITE.name}`
    : `${SITE.name} — ${SITE.role}`;
  const url = `${SITE.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE.url}${image}`} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE.url}${image}`} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: SITE.name,
          jobTitle: SITE.role,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressCountry: "PK",
          },
          url: SITE.url,
          sameAs: [
            "https://github.com/SyedFaizanJaved",
            "https://linkedin.com/in/syedfaizanjaved",
          ],
        })}
      </script>
    </Helmet>
  );
}
