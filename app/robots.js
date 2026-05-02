export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://gorudoinvestments.co.zw/sitemap.xml",
    host: "https://gorudoinvestments.co.zw",
  };
}
