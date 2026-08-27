# Phase 3 素材输入覆盖报告

收集日期：2026-08-27（Asia/Shanghai）

## 输入与处理结果

| 输入 | 位置 | 处理结果 |
| --- | --- | --- |
| 关键词清单 | `/Users/tangxiaolv7/ai-coding/codex-projects/wardogs game/keywords.json` 与用户补充的第二阶段清单 | 本阶段处理三个阵营独立页、地图与地图机制、武器/装备/车辆数据库、Gold Bars、Player Skills、Black Market 和 roadmap。 |
| 已有阵营素材 | `keyword-materials/phase-2/wardogs-factions.md` | 作为背景和冲突边界参考；未覆盖其未经证实的推断。 |
| 官方/商店/社区来源 | 各阶段 3 素材 Markdown 文件 | 已按来源类型、URL、访问日期和事实边界记录。 |
| 图片素材 | `keyword-materials/phase-3/assets/` | 已下载并记录尺寸、字节数、SHA-256、来源与版权状态。 |

## 规范化记录

| 主关键词 | 稳定 slug | 意图 | 页面族 | 状态 | 来源覆盖 |
| --- | --- | --- | --- | --- | --- |
| WARDOGS Lonestar faction | `wardogs-lonestar-faction` | 阵营身份与已知规则查询 | faction profile | ready with gaps | 5 |
| WARDOGS Valkyra faction | `wardogs-valkyra-faction` | 阵营身份与已知规则查询 | faction profile | ready with gaps | 5 |
| WARDOGS Manticore faction | `wardogs-manticore-faction` | 阵营身份与已知规则查询 | faction profile | ready with gaps | 5 |
| WARDOGS maps | `wardogs-maps` | 地图规模与公开地图信息查询 | map overview | review | 5 |
| WARDOGS map mechanics | `wardogs-map-mechanics` | 地图机制解释 | mechanics guide | review | 5 |
| WARDOGS weapons database | `wardogs-weapons-database` | 武器目录查询 | item database | ready with gaps | 5 |
| WARDOGS equipment database | `wardogs-equipment-database` | 装备目录查询 | item database | ready with gaps | 5 |
| WARDOGS vehicles database | `wardogs-vehicles-database` | 载具目录查询 | item database | ready with gaps | 5 |
| WARDOGS Gold Bars | `wardogs-gold-bars` | 账户经济与 Gold Market 规划解释 | economy mechanic | review | 5 |
| WARDOGS Player Skills | `wardogs-player-skills` | 技能/进度规划解释 | progression mechanic | review | 5 |
| WARDOGS Black Market | `wardogs-black-market` | 对局外市场规划解释 | metagame mechanic | review | 5 |
| WARDOGS roadmap | `wardogs-roadmap` | Early Access 路线方向查询 | roadmap | review | 5 |

同义词合并：本阶段没有另建 faction / factions、阵营简称或“best faction”页面；这些变体应在后续页面建模时指向同一 canonical 页面，避免关键词内耗。

## 事实冲突与缺口

- 三个官方/第一方来源共同确认三队与 Control Zone 框架；没有确认阵营专属武器、载具、技能、经济、出生点或数值加成。
- 阵营身份短句（Lonestar、Valkyra、Manticore 的政治/地缘描述）由官方 Steam Top Questions/FAQ 提供；竞品页面作为交叉整理来源，未将竞品推断升级为官方事实。
- 玩家能否自由选队、阵营分配和重平衡方式、领导者与完整历史、独立进度及视觉识别均保留为“待确认”。
- 本阶段没有找到可明确归属于单个阵营的官方 YouTube 视频；通用预告片不嵌入阵营页。

## 媒体覆盖

- Lonestar：2 张官方 Steam/CDN 图片，均为 candidate；没有明确标注的 Lonestar 专属角色或装备图。
- Valkyra：3 张 Team17 官方战场截图，均为 blocked（未找到明确复用许可，且无 Valkyra 标识）。
- Manticore：2 张 Team17 官方截图为 candidate；1 张竞品媒体副本为 blocked，仅作溯源对照。
- Maps：1 张 Team17 官方河流场景图，blocked；Map mechanics：1 张 Team17 官方 Foundry 场景图，blocked。
- Weapons、Equipment、Vehicles：分别 1、1、2 张 Team17 官方截图，均为 blocked，不能从画面推导物品名称或参数。
- Gold Bars、Player Skills、Black Market、Roadmap：各 1 张官方概念图，均为 blocked，仅作氛围图候选。
- `assets/wardogs-residential-street.jpg` 是 Valkyra 素材的同 SHA-256 未引用重复文件，保留以避免误删，后续整理时可移入共享素材目录。

## YouTube 字幕缺口

- 已确认可嵌入且有可核验文字转录：`WARDOGS | Early Access & Beyond`（Gold Bars、Player Skills、Black Market、Roadmap 规划语境）。
- `WARDOGS | Game Mode Explained`（地图/地图机制）只有视频页面公开描述，尚未取得完整字幕文件；若需要逐句字幕，请人工补充后再写入正文。
- Reveal Trailer 仅作为通用视觉参考，未提供可用于武器、装备或车辆数据库的稳定规格字幕，因此未作为这些页面的事实来源。

结论：本阶段 12 个关键词页面均达到 5 个来源的交叉验证要求，并可进入内容建模；媒体上线前需要完成权利确认，阵营专属机制和部分地图交互仍需官方资料补充。
