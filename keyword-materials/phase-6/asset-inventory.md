# Phase 6 图片素材清单

收集日期：2026-08-29（Asia/Shanghai）

本阶段检查了 `wardogswiki.org` 首页及 Release、Guides、Mechanics、Weapons、Vehicles 相关可访问页面。该站公开发布的实际图片资源只有一个站点 OG 图和一个 Logo；没有按分类发布的独立游戏截图或卡片图。因此只将与 Release 语义直接匹配的 OG 图用于页面，其余四个分类继续使用项目已有的主题素材，避免把同一张泛用图重复套用到不同分类。

## 可发布素材

| 字段 | 记录 |
| --- | --- |
| `asset_id` | `wardogswiki-field-intel-og` |
| `category` | `community-download` |
| `filename` | `src/assets/phase-6/wardogswiki-field-intel.png` |
| `sha256` | `8effc80dee81d0186779ae37ffff23c276ae48a40f3f36d2df96ee36bcbe4f35` |
| `original_url` | `https://wardogswiki.org/og.png` |
| `source_page` | `https://wardogswiki.org/` |
| `access_date` | `2026-08-29` |
| `media_metadata` | PNG；RGB；1672×941；1,819,909 bytes；约 16:9；无 Alpha；静态图；无音频 |
| `intended_usage` | Release 分类的 `release-date` 文章封面与正文配图；保留原比例，使用 Astro 响应式处理，不裁切文字 |
| `source_status` | `community` |
| `rights_state` | `cleared`（用户明确表示已取得该网站图片使用许可；许可声明不展示在网页正文） |
| `release_status` | `production` |
| `derivation` | `none`；从公开原图下载后以稳定语义文件名保存 |
| `authenticity_label` | WARDOGSWIKI 社区站点的品牌化 field-intel 图；不是游戏内截图，不用于证明未在图中写明的玩法或数值 |
| `gap_fallback` | 图片移除时保留 `release-date` 文章文字内容与无图卡片布局，不以其他分类图片替代 |

## 检查但不使用的素材

| 字段 | 记录 |
| --- | --- |
| `asset_id` | `wardogswiki-logo-mark` |
| `category` | `community-download` |
| `filename` | `not imported` |
| `sha256` | `679b1266b07c5ca5387ae6bb5a90591d1f5d9a5276cb9c7f27511b705833c1cb` |
| `original_url` | `https://wardogswiki.org/favicon-logo.png` |
| `source_page` | `https://wardogswiki.org/` |
| `access_date` | `2026-08-29` |
| `media_metadata` | PNG；RGBA；512×512；260,252 bytes；正方形；含 Alpha；静态图；无音频 |
| `intended_usage` | 仅为竞品站 Logo；不适合作为 Release、Guides、Mechanics、Weapons 或 Vehicles 的文章/卡片配图 |
| `source_status` | `community` |
| `rights_state` | `cleared`（用户明确表示已取得该网站图片使用许可） |
| `release_status` | `rejected` |
| `derivation` | `none` |
| `authenticity_label` | 竞品站品牌 Logo，不是 WARDOGS 游戏内容证据 |
| `gap_fallback` | 不在站内使用，保留现有 WARDOGS Logo |

## 分类缺口

- `Guides`、`Mechanics`、`Weapons`、`Vehicles` 页面在该站公开 HTML 中没有独立图片资源；没有可归因的分类图可下载。
- 竞品站的视频通过 YouTube iframe 播放，视频缩略图不作为该站图片资源混入本阶段下载；项目现有视频与图片素材继续按各自来源使用。
