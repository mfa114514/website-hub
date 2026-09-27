import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const rootFiles = await readdir(new URL("..", import.meta.url));

const requiredMarkers = [
  "完整备份与恢复",
  "批量导入网站",
  "批量编辑网站",
  "全局开启星标优先",
  "displayDensity",
  "最近访问与常用统计",
  "website-hub-full-backup",
  "serviceWorker.register"
];

for (const marker of requiredMarkers) assert.ok(html.includes(marker), `缺少发行功能标记：${marker}`);

assert.match(html, /const seedCategories = \[\];/, "首次启动分类必须为空");
assert.match(html, /const seedSites = \[\];/, "首次启动网站必须为空");
assert.equal(rootFiles.includes(".openai"), false, "公开发行版不得包含私人 Sites 发布配置");

console.log(JSON.stringify({
  ok: true,
  checks: ["全部功能入口存在", "首次启动数据为空", "私人发布配置不存在"]
}));
