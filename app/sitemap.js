export default function sitemap() {
  const base = "https://gorudoinvestments.co.zw";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#about`, lastModified: now, priority: 0.8 },
    { url: `${base}/#divisions`, lastModified: now, priority: 0.8 },
    { url: `${base}/#products`, lastModified: now, priority: 0.8 },
    { url: `${base}/#procurement`, lastModified: now, priority: 0.8 },
    { url: `${base}/#contact`, lastModified: now, priority: 0.7 },
  ];
}
