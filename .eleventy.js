const eleventySass = require("eleventy-sass");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPlugin(eleventySass);

  // Si quieres footnotes en Markdown:
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItFootnote));

  // Colección ordenada por data.order (numérico)
  eleventyConfig.addCollection("temas", (collectionApi) => {
    return collectionApi.getFilteredByTag("unidad").sort((a, b) => {
      return Number(a.data.orden ?? 0) - Number(b.data.orden ?? 0); // ascendente
      // si la quieres descendente: return Number(b.data.order ?? 0) - Number(a.data.order ?? 0);
    });
  });
};


