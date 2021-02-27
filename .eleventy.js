const { DateTime } = require("luxon");
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (value) => {
    return DateTime.fromJSDate(value, { zone: "utc" }).toFormat("LLLL yyyy");
  });

  // w3date
  eleventyConfig.addFilter("w3Date", (value) => {
    const dateObject = new Date(value);

    return dateObject.toISOString();
  });

  // Add Tailwind Output CSS as Watch Target
  eleventyConfig.addWatchTarget("./_tmp/static/css/style.css");

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./_tmp/static/css/style.css": "./static/css/style.css",
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Returns a collection of work in reverse date order
  eleventyConfig.addCollection("work", (collection) => {
    return [...collection.getFilteredByGlob("./src/work/*.md")].reverse();
  });

  // Returns work items filtered by commissions
  eleventyConfig.addCollection("commissions", (collection) => {
    return collection
      .getFilteredByGlob("./src/work/*.md")
      .filter((x) => x.data.commission);
  });

  // Returns work items, sorted by display order then filtered by featured
  eleventyConfig.addCollection("featuredWork", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/work/*.md")
    ).filter((x) => x.data.featured);
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
