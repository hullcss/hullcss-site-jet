const pluginDate = require('eleventy-plugin-date');
const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginRss);
	  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
