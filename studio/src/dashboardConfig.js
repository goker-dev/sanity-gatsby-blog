export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6059e7053f0f1a289125fb10",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-okgoim12",
                  apiId: "145930ec-704f-4303-b9d2-8dd2f864e8cc",
                },
                {
                  buildHookId: "6059e7056307aa2e3de440e5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-v5cdkjho",
                  apiId: "6c3688c9-00e4-4fcd-89ae-ca29f0ace3a0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/gokercebeci/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-v5cdkjho.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
