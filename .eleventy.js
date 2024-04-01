const eleventySass = require("eleventy-sass");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPlugin(eleventySass);
};

