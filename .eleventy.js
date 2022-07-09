const pluginDate = require('eleventy-plugin-date');
module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPlugin(pluginDate);
	  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
