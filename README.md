# 常用网站（Website Hub）

一个本机优先、无需账号和数据库的常用网站管理工具。下载后即可使用，也可以部署到 GitHub Pages、Netlify、Cloudflare Pages、Vercel 或任意静态服务器。

这个公开发行版不包含任何个人网站、分类、标签、访问记录或私人发布配置。首次打开为空白状态，由使用者自行添加内容。

## 主要功能

- 添加、编辑、删除、搜索和打开网站；
- 自定义分类与独立标签库；
- 卡片、列表、分类和最近访问四种视图；
- 自定义时间范围的访问统计；
- 星标网站及可全局关闭的星标优先；
- 多条件排序及优先级调整；
- 5 档显示密度和三种长名称显示方式；
- 批量编辑分类、标签和备注；
- 从浏览器收藏夹 JSON/HTML、JSON、CSV、TSV、TXT 或粘贴文本批量导入；
- 自动网站图标及自定义图标；
- 完整 JSON 备份与恢复，恢复前自动生成安全备份；
- 响应式手机布局、离线缓存和可安装网页应用支持。

## 下载后直接使用

1. 在 GitHub 仓库页面选择 **Code → Download ZIP**。
2. 解压到一个以后不会随意移动的位置。
3. Windows 可双击 `start-windows.cmd`；也可以直接双击 `index.html`。
4. 首次打开后添加网站即可。

推荐使用启动脚本，因为固定的本地网址能让浏览器数据位置更加稳定。脚本会优先使用电脑上的 Python 启动本地静态服务器；如果没有 Python，则直接打开 HTML 文件。

数据保存在打开工具的浏览器中。移动文件、换浏览器、清除浏览器网站数据或改用另一个部署地址前，请先使用“备份与恢复”下载完整备份。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/pages.yml`。Fork 或复制到自己的仓库后：

1. 打开仓库的 **Settings → Pages**；
2. 在 **Build and deployment** 中选择 **GitHub Actions**；
3. 推送到 `main` 分支；
4. 等待 `Deploy Website Hub to Pages` 工作流完成。

GitHub Pages 只托管程序文件。每位访问者的网站数据仍保存在各自浏览器中，不会自动共享。

## 部署到其他平台

这是纯静态网页，无需构建命令：

- Netlify：导入仓库，发布目录填写 `.`；
- Cloudflare Pages：导入仓库，不填写构建命令，输出目录填写 `.`；
- Vercel：导入仓库并选择 `Other` 框架，输出目录保持根目录；
- 任意静态服务器：上传 `index.html`、`manifest.webmanifest`、`service-worker.js` 和 `icon.svg`。

## 本地开发与检查

在仓库目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

然后打开 `http://127.0.0.1:4173/`。

运行不需要安装依赖的发行检查：

```powershell
npm test
```

## 数据与隐私

- 网站、备注、标签、自定义图标和访问记录默认只保存在当前浏览器的 `localStorage` 中；
- 工具不会要求或保存密码、验证码、访问令牌；
- 常用统计只记录从本工具点击打开网站的时间，不读取浏览器历史；
- 完整备份可能含有私人网址、备注和访问记录，应当作为私人文件保管；
- 网站图标默认通过网站域名请求 Google favicon 服务，加载失败时显示名称首字；也可上传本地图标。

## 项目结构

- `index.html`：完整应用；
- `manifest.webmanifest`、`service-worker.js`、`icon.svg`：安装与离线支持；
- `start-windows.cmd`：Windows 一键启动；
- `.github/workflows/pages.yml`：GitHub Pages 自动部署；
- `verification/verify-static.mjs`：发行内容与隐私边界检查。

## 许可证

MIT License。可以自由使用、修改和分发，但请保留许可证文本。
