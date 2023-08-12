import Alpine from "alpinejs";

// Highlight.js + theme (yay, srcery is builtin!)
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/srcery.css";

// highlight.js languages
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import clj from "highlight.js/lib/languages/clojure";
import lua from "highlight.js/lib/languages/lua";
import rust from "highlight.js/lib/languages/rust";
import bash from "highlight.js/lib/languages/bash";
import vim from "highlight.js/lib/languages/vim";

// Examples
import ctxt from "./examples/c.txt?raw";
import jstxt from "./examples/js.txt?raw";
import cljtxt from "./examples/clj.txt?raw";
import luatxt from "./examples/lua.txt?raw";
import rusttxt from "./examples/rust.txt?raw";
import bashtxt from "./examples/bash.txt?raw";
import vimtxt from "./examples/vim.txt?raw";

// Register languages
hljs.registerLanguage("c", c);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("clj", clj);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("vim", vim);

const languages = {
  c: {
    html: hljs.highlight(ctxt, { language: "c" }).value,
    data: ctxt,
    name: "C",
  },
  js: {
    html: hljs.highlight(jstxt, { language: "js" }).value,
    data: jstxt,
    name: "JavaScript",
  },
  clj: {
    html: hljs.highlight(cljtxt, { language: "clj" }).value,
    data: cljtxt,
    name: "Clojure",
  },
  lua: {
    html: hljs.highlight(luatxt, { language: "lua" }).value,
    name: "Lua",
  },
  rust: {
    html: hljs.highlight(rusttxt, { language: "rust" }).value,
    name: "Rust",
  },
  bash: {
    html: hljs.highlight(bashtxt, { language: "bash" }).value,
    name: "Bash",
  },
  vim: {
    html: hljs.highlight(vimtxt, { language: "vim" }).value,
    name: "Vim",
  },
};

function main() {
  window.Alpine = Alpine;
  Alpine.data("state", () => ({
    languages,
    activeTab: "c",
    handleTab(lang) {
      this.activeTab = lang;
    },
  }));

  Alpine.start();
}

main();
