# WARDOGS SEO 与内容入口优化设计

## 背景

基于两个竞品的对比，当前 WARDOGS 站点已有完整的英文内容集合、证据标注和文章级 SEO，但首页标题更偏武器/车辆，发布前高意图入口不够突出，文章缺少统一的状态与来源摘要，Hero 视频会在首屏加载 iframe，标签聚合页过于分散，仓库元数据仍保留模板品牌。

## 已批准范围

本次仅执行第一层优化，不新增未经核验的游戏事实，也不创建空的 Coming Soon 页面：

1. 首页 Title/Description 保留 `WARDOGS Wiki` 与现有 Beginner Guides、Weapons、Vehicles 主题，并增加 Playtest 意图。
2. 首页 Priority Pages 与站点导航突出 Playtest、Beta、Download、System Requirements；已有 Factions、Maps、Weapons、Vehicles 页面通过聚合入口暴露。
3. 文章头部新增统一的状态信息区，数据只读取现有 frontmatter，缺失字段不显示，不写推测值。
4. Hero 视频使用 poster 优先、点击后加载的共享懒加载组件，不在首屏创建 YouTube iframe。
5. 标签聚合页仅保留具有聚合价值的标签进入索引；低价值单篇标签仍可访问但使用 `noindex`，不进入 sitemap。
6. 清理 `package.json` 的 AnvilWiki 模板名称、主页、仓库和 bug 地址。
7. 保持英文单语言、暖黑视觉、现有路由与内容架构不变。

## 暂不执行范围

Playtest Sign Up、Alpha Key、FirstLook Login、Battlefield/Squad/Arma 比较页、视频/社区聚合页、单项数据库和真实参数 Compare 工具需要继续核验素材，本次不创建。

## 设计决策

- 首页 H1 保持 `WARDOGS Wiki`，以降低主主题变化风险；Title 采用 `WARDOGS Wiki — Beginner Guides, Weapons, Vehicles & Playtest`（60 字符）。
- 首页 Description 以发布、试玩、Gameplay 和指南为开头，并保留现金、Control Zone、武器与车辆等现有主题。
- 文章状态卡使用可选 frontmatter 字段 `status`, `lastVerified`, `primarySource`, `nextAction`；schema 不强制旧文章立即补齐，只有字段完整时才显示对应内容。
- 文章已有 `date`/`lastModified` 继续保留；状态卡不重复推导未经声明的事实。
- `LazyYouTube` 只生成封面按钮，点击后才插入 iframe；Hero 背景视频层不再单独创建第二个 iframe。
- Tag 页面将 `noindex` 传入 `LocaleLayout`，并由静态路由生成逻辑同步过滤 sitemap；聚合标签的阈值为至少 2 篇已发布文章。
- 导航不新增不存在的分类 key；新增的是已有文章的精选链接，确保所有链接指向真实页面。

## 验收标准

- 首页 Title 含 `WARDOGS Wiki`、`Beginner Guides`、`Weapons`、`Vehicles`、`Playtest`，长度 40–60 字符。
- 首页 Description 含 `WARDOGS`、`Release Date` 或 `Early Access`、`Playtest`、`Gameplay`、`Guides`，长度 140–160 字符。
- 新状态卡对旧文章不报错；有完整状态 frontmatter 的文章显示四个字段。
- 首屏 HTML 不包含 Hero YouTube iframe，点击 poster 后才创建 iframe；MDX 视频懒加载行为保持不变。
- 单篇标签页输出 `noindex, nofollow` 且不出现在 sitemap；多篇标签页保持可索引。
- 站点构建、内容检查、链接检查、类型检查与现有测试通过。
- 不新增游戏事实、平台、价格、日期、角色、数值或兑换码。
