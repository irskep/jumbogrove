const fs = require("fs-extra")
const path = require("path")
const cheerio = require("cheerio")

const toSnippet = id => `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');
</script>
`.trim();

class Plugin {
  onStart(ev) {
    this._option = ev.data.option || {}
    if (!("enable" in this._option)) this._option.enable = true
  }

  onHandleContent(ev) {
    if (!this._option.enable) return

    const fileName = ev.data.fileName
    if (path.extname(fileName) !== ".html") return

    const $ = cheerio.load(ev.data.content)

    $("head").append(toSnippet(this._option.id))

    ev.data.content = $.html()
  }

  onPublish(ev) {
    if (!this._option.enable) return
    ev.data.writeFile("gtm.js", toSnippet(this._option.id))
  }
}

module.exports = new Plugin()