export const SITE = {
  website: "https://aazis7.pages.dev/", // replace this with your deployed domain
  author: "Abdul Azis",
  profile: "https://github.com/aazis7",
  desc: "Hai, aku Abdul Azis! Aku suka ngoprek web, udah setahun lebih bikin aplikasi web yang asik dan gampang dipake, pake teknologi kayak [TypeScript](), [React](https://react.dev), [Next.js](), [Express](), sama [Hono](). Selain nulis kode, aku juga nyempetin buat nuangin isi hati dan pikiran melalui cerita pendek, novel, atau puisi yang bikin orang bilang why (wkwk). Di medsos, aku suka share konten seru yang nyampur teknis sama kreatif biar bisa nginspirasi temen-temen semua.",
  title: "Abdul Azis Blog",
  ogImage: "og-image.png",
  lightAndDarkMode: true,
  postPerIndex: 3,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit halaman",
    url: "https://github.com/aazis7/aazis7-site/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "id", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
