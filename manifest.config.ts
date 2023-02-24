import { defineManifest } from "./script/build-manifest"

export default defineManifest({
  manifest_version: 2,
  name: "__MSG_name__",
  description: "__MSG_description__",
  version: process.env.npm_package_version!,
  default_locale: "zh_CN",
  content_security_policy: "script-src 'self'; object-src 'self';",
  minimum_chrome_version: "81.0.0",
  permissions: ["chrome://favicon/"],
  optional_permissions: [
    "topSites",
    "https://cn.bing.com/",
    "https://suggestion.baidu.com/",
    "https://api.bing.com/",
    "https://suggestqueries.google.com/"
  ],
  chrome_url_overrides: {
    newtab: "index.html#/"
  },
  browser_action: {
    default_icon: "icons/logo128.png",
    default_title: "__MSG_name__",
    default_popup: "index.html#/popup"
  },
  icons: {
    "32": "icons/logo32.png",
    "64": "icons/logo64.png",
    "128": "icons/logo128.png"
  }
})
