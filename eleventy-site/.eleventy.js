const moment = require("moment");
const { DateTime } = require("luxon");

require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("date", function (dateObj, format) {
    return DateTime.fromISO(dateObj, {zone: 'utc'}).toFormat(format);
    // return moment(date).format(format);
  });

  // limit filter
  eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  // passthrough copy
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Base config
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};