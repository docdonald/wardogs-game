# WARDOGS map mechanics 素材

> 关键词：`WARDOGS map mechanics`  
> 采集日期：2026-08-27  
> 内容用途：地图机制页，回答 Control Zone、Hot Zone、塔、FOB、运输、建造与三队路线之间的关系。  
> 证据边界：官方资料确认 Control Zone、Hot Zone、三队计分、运输、FOB、建造和破坏；塔终端、代码输入及部分 Hot Zone 拉动流程主要来自竞品和社区测试记录，必须标成 build-sensitive 或待确认。

#官方素材1
#网址：[https://www.team17.com/games/wardogs](https://www.team17.com/games/wardogs)
标题：WARDOGS - Team17
#内容
Team17 的官方玩法说明构成地图机制的稳定基础：三队在大型地图内争夺随机的 2×2 km Control Zone，区域内人数最多的队伍获得分数，首支达到 100 分的队伍赢得比赛。官方同时说明 Hot Zone 可提供双倍现金，玩家可以用直升机运输队友或物资、建造前进作战基地，并利用建筑破坏或防御改变接近目标区的方式。官方没有公开塔终端代码、每个塔的作用、区域移动时间或建造资源消耗。

可直接使用的事实：
- Control Zone 是地图上的主要计分区域。
- Hot Zone 是与额外现金收益相关的较小高价值区域；双倍现金是官方文案明确提到的收益描述。
- 运输、FOB、建造和破坏会影响地图路线和交战位置。
- 塔代码、具体交互步骤、冷却时间、油料成本和拉区距离待确认。

短引（不超过 25 词）：“Every teamplay action you perform rewards cash.”

#官方素材2
#网址：[https://store.steampowered.com/app/1867240/WARDOGS/](https://store.steampowered.com/app/1867240/WARDOGS/)
标题：WARDOGS on Steam
#内容
Steam 商店页确认 Control Zone 为随机的 2×2 km 区域，三队围绕它作战，人数优势会产生分数，先达到当前胜利目标的队伍获胜。页面还说明 Hot Zone 可以带来双倍现金，玩家能购买装备和车辆、运输物资、建造前进基地，并通过火箭和重型车辆破坏建筑或用防御工事巩固关键位置。商店页没有把塔代码、塔钻或具体地图交互列为正式规则，因此这些内容不能仅凭社区帖子升级为官方机制。

可直接使用的事实：
- 地图机制围绕“移动到活动目标—争夺人数—赚取和使用现金”展开。
- 玩家可选择战斗、运输、建造或破坏等地图角色；官方没有固定职业限制的表述。
- 当前商店页提供的是产品机制概览，不是每个交互物的操作手册。

短引（不超过 25 词）：“You could chase the ‘Hot Zone’ to earn double the cash.”

#官方素材3
#网址：[https://steamcommunity.com/app/1867240/discussions/0/762932533852726673/](https://steamcommunity.com/app/1867240/discussions/0/762932533852726673/)
标题：WARDOGS FAQ（开发者置顶 Steam 社区讨论）
#内容
官方开发者账号发布的 FAQ 对 Control Zone 的计分节奏补充了更具体的规则：每 30 秒，Control Zone 内人数最多的队伍获得 1 分，第一支达到 100 分的队伍获胜。FAQ 还说明三队为 Valkyra、Lonestar 和 Manticore，并确认车辆可驾驶、飞机可驾驶；角色由玩家购买装备来定义，而不是预设职业。该 FAQ 没有公开塔代码机制，也没有说明完整地图边界或每个地图的 POI。

可直接使用的事实：
- 30 秒计分间隔和 100 分胜利条件来自开发者 FAQ；页面应注明来源日期和版本上下文。
- 三队在同一 Control Zone 内争夺，不能把地图机制写成单队占点。
- 车辆和飞机提供地图机动方式，但型号、刷新点、燃料和路线仍需独立素材。

短引（不超过 25 词）：“Every thirty seconds, the team with the most players in the Control Zone earns one point.”

#YouTube 素材4
#网址：[https://www.youtube.com/watch?v=cSn5IGknapM](https://www.youtube.com/watch?v=cSn5IGknapM)
标题：WARDOGS | Game Mode Explained（BULKHEAD）
#内容
BULKHEAD 官方视频专门解释 WARDOGS 的核心模式，可作为地图机制页的嵌入视频。视频简介将其定位为回答“这是什么模式”，强调它不是 Battle Royale 或 Extraction FPS，适合帮助玩家理解为什么地图上的主要动线围绕 Control Zone 与三队交战展开。未获取完整可验证字幕，不能从视频画面推断塔的操作顺序、区域移动时间、地图大小或其他未在文字来源中确认的数值；如要逐句引用需补充字幕文件（待确认）。

可直接使用的事实：
- 视频来自 BULKHEAD 官方 YouTube 频道。
- 正文可将该视频放在“模式如何驱动地图移动”小节。
- 视频不应替代官方文字规则或当前版本的交互说明。

短引（不超过 25 词）：“This isn’t a Battle Royale. This isn’t another Extraction FPS.”

#竞品素材5
#网址：[https://www.wardogswiki.com/en/guides/wardogs-map](https://www.wardogswiki.com/en/guides/wardogs-map)
标题：WARDOGS Map Guide: Control Zones, Towers & Objectives
#内容
竞品地图指南将地图机制组织为 Active Zone、Tower and Terminal、Hot Zone、FOB Placement 和 Three-Team Route Planning 五个玩家需求。它把“塔终端流程”描述为到达活动塔、清理周围区域、读取当前提示并守住交互；同时提醒具体 prompt、时间和可用性可能随测试版本变化。该页面是第三方内容，适合用来识别玩家搜索问题和组织内页结构，但不应把其塔操作、FOB资源或路线建议直接标成官方固定规则。

可直接使用的事实边界：
- 竞品确认了塔、终端、FOB、Hot Zone 与三队路线是高需求地图机制主题。
- “清理—交互—防守”的塔页结构可作为内容框架，具体代码和终端提示待当前客户端验证。
- FOB 位置建议属于策略编辑意见，不是官方地图坐标。

## 页面可回答的问题

- Control Zone 如何计分？官方 FAQ 说明每 30 秒比较区域内人数最多的队伍并给 1 分，先达到 100 分者胜出。
- Hot Zone 有什么用？官方说明它能带来双倍现金；其更具体的计数、移动和拉动规则需要按版本确认。
- FOB 如何影响地图？官方确认玩家可以建造前进基地并加固关键位置；最佳位置、补给和防守路线属于策略层内容。
- 塔和代码怎么运作？竞品和社区记录了塔终端、代码和拉动 Hot Zone 的观察，但官方公开文字未完整确认，操作步骤待确认。
- 为什么要关注运输和破坏？运输让玩家把人和物资带到活动目标，建造与破坏会改变接近路线和防守位置。

## 已确认的机制链

1. 查看当前随机 Control Zone，并确定队伍的接近路线。
2. 进入并维持 Control Zone 的人数优势，按官方 FAQ 的计分节奏争夺分数。
3. 根据队伍需要选择战斗、复活、运输、建造、侦察或车辆支援。
4. 在 Hot Zone 的额外现金收益与主区域计分之间做取舍。
5. 用建筑、防御和破坏改变路线；所有塔代码、钻机和特殊终端流程以当前版本为准。

## 待确认

- Hot Zone 是否始终是 Control Zone 内的固定比例区域，以及玩家计数倍率的当前版本规则。
- 塔的数量、代码长度、代码来源、输入位置、冷却时间和是否可破坏。
- FOB 钻机的资源类型、成本、作用范围、冷却和与塔机制的关系。
- Control Zone 与 Hot Zone 的移动触发条件、频率和边界变化。
- 建造物的材料、补给、耐久、拆除与破坏规则。

## 素材来源与使用说明

官方图片素材见 `assets/wardogs-map-mechanics/wardogs-map-foundry--official.jpg`。该文件从 Team17 WARDOGS 页面公开图片端点下载，适合展示官方环境和可破坏建筑语境；它不能证明塔、FOB、Hot Zone 或任何特定交互存在于该画面。`rights_state` 标记为 `accessible-but-unconfirmed`，`release_status` 标记为 `blocked`，上线前需要核对 Press Kit 或明确许可。

## 标准化记录

```yaml
title: "WARDOGS Map Mechanics"
slug: "wardogs-map-mechanics"
primary_keyword: "WARDOGS map mechanics"
secondary_keywords:
  - "WARDOGS Control Zone mechanics"
  - "WARDOGS Hot Zone mechanics"
  - "WARDOGS tower code"
  - "WARDOGS FOB mechanics"
intent: "mechanics explanation"
page_family: "mechanics-guide"
object_type: "map-mechanics"
object_id: "wardogs-map-mechanics"
sources:
  - id: "team17-wardogs"
    kind: "official-game-page"
    url: "https://www.team17.com/games/wardogs"
    accessed_at: "2026-08-27"
    scope: "public product description"
    confidence: "exact"
  - id: "steam-wardogs"
    kind: "official-store-page"
    url: "https://store.steampowered.com/app/1867240/WARDOGS/"
    accessed_at: "2026-08-27"
    scope: "current Steam listing"
    confidence: "exact"
  - id: "developer-steam-faq"
    kind: "official-developer-faq"
    url: "https://steamcommunity.com/app/1867240/discussions/0/762932533852726673/"
    accessed_at: "2026-08-27"
    scope: "developer pinned FAQ"
    confidence: "exact"
  - id: "bulkhead-game-mode-video"
    kind: "official-video"
    url: "https://www.youtube.com/watch?v=cSn5IGknapM"
    accessed_at: "2026-08-27"
    scope: "game mode explanation"
    confidence: "exact"
  - id: "competitor-map-guide"
    kind: "competitor-reference"
    url: "https://www.wardogswiki.com/en/guides/wardogs-map"
    accessed_at: "2026-08-27"
    scope: "community guide and current-build observations"
    confidence: "community"
media:
  - id: "wardogs-map-foundry-official"
    path: "keyword-materials/phase-3/assets/wardogs-map-mechanics/wardogs-map-foundry--official.jpg"
    intended_use: "map-mechanics environment figure; responsive crop; not proof of a specific interaction"
    source_id: "team17-wardogs"
    rights_state: "accessible-but-unconfirmed"
    release_status: "blocked"
status: "review"
conflicts:
  - field: "tower-and-drill-flow"
    state: "unresolved"
    sources: ["team17-wardogs", "developer-steam-faq", "competitor-map-guide"]
    resolution: "Publish only the official Control Zone/Hot Zone/FOB facts; keep tower, code and drill details in a pending-verification block."
```
