;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ListCleaner = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function clean(text, options) {
    if (!text || typeof text !== 'string') return '';
    options = options || {};
    let lines = text.split(/\r?\n/);

    // 1. Trim each line
    lines = lines.map(l => l.trim());

    // 2. Remove empty lines
    if (options.removeEmpty !== false) {
      lines = lines.filter(l => l.length > 0);
    }

    // 3. Deduplicate
    if (options.dedupe !== false) {
      lines = Array.from(new Set(lines));
    }

    // 4. Sort
    if (options.sort === 'asc') lines.sort((a, b) => a.localeCompare(b));
    else if (options.sort === 'desc') lines.sort((a, b) => b.localeCompare(a));

    // 5. Prefix / Suffix
    if (options.prefix) lines = lines.map(l => options.prefix + l);
    if (options.suffix) lines = lines.map(l => l + options.suffix);

    return lines.join('\n');
  }

  return { clean: clean };
});
