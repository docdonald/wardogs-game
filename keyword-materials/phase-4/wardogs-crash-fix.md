# Wardogs crash fix 素材

> 收集日期：2026-08-27  
> 关键词意图：玩家想处理启动崩溃、黑屏、DX12 或反作弊相关问题。  
> 事实边界：目前公开解决步骤主要是测试期社区建议；官方尚未发布统一 crash-fix 清单，安全设置不能被擅自关闭。

#Steam 官方素材1
#网址：[https://steamcommunity.com/app/1867240/discussions/0/586183630899109949/](https://steamcommunity.com/app/1867240/discussions/0/586183630899109949/)
标题：KERNEL 93X COMPUTER CRASH
#内容
玩家报告测试期出现影响整机的崩溃，开发者 G_Medlin 回复称所有崩溃都会被跟踪，用于 Early Access 前识别和遏制问题。社区建议关闭 Windows Core Isolation 等安全功能，但该建议存在争议，不能作为本站默认修复。页面应优先建议保留崩溃日志并向官方报告。

### 原文（Steam 社区讨论帖 KERNEL 93X COMPUTER CRASH，英文原文）

> Steam 社区讨论帖（测试期玩家报告 + 开发者回复 G_Medlin）。

> KERNEL 93X COMPUTER CRASH
>
> What's going on? Never had this type of issue in any game, ever. I'm seeing more people having KERNEL computer crash.
>
> Flem
>
> Aug 21 @ 1:07pm
>
> Same here
>
> Last edited by Flem;
> Aug 21 @ 1:07pm
>
> BinkzNotFound
>
> Aug 21 @ 1:10pm
>
> Same. have to lay off the attempts to play for now. it's the fifth time it crash my pc, not just the game. my whole pc, I dont think that's healthy for the pc.
>
> Enti
>
> Aug 21 @ 2:25pm
>
> Same.
>
> Mistik
>
> Aug 21 @ 3:30pm
>
> +1
>
> vefols
>
> Aug 21 @ 3:41pm
>
> +1 I can provide the analysis if needed to the dev
>
> SwiftyMcJay
>
> Aug 21 @ 3:48pm
>
> same, constantly crashing, sometimes just the game and sometimes the entire pc
>
> LovelySchizoid
>
> Aug 21 @ 3:49pm
>
> Because kernel is blocking easy anticheat (or whatever ♥♥♥♥ is demanding access to the low-level system\CPU instructions layer) and then, unable to resolve the conflict, shut down the whole system due to the security issue. So the system is fine and work as intended.
>
> Last edited by LovelySchizoid;
> Aug 21 @ 3:52pm
>
> Viper
>
> Aug 21 @ 3:50pm
>
> Turn off core isolation and restart your pc. This should fix it, windows 11 seems to have it turned on causing the issue.
>
> LovelySchizoid
>
> Aug 21 @ 3:50pm
>
> Originally posted by Viper:
> Turn off core isolation and restart your pc. This should fix it, windows 11 seems to have it turned on causing the issue.
>
> DON'T ♥♥♥♥♥♥♥ DO IT.
> DO NOT DO IT.
>
> Just delete this abomination or wait until they gonna patch this crap.
>
> Last edited by LovelySchizoid;
> Aug 21 @ 3:53pm
>
> Viper
>
> Aug 21 @ 3:53pm
>
> Originally posted by LovelySchizoid:
>
> Originally posted by Viper:
> Turn off core isolation and restart your pc. This should fix it, windows 11 seems to have it turned on causing the issue.
>
> DON'T ♥♥♥♥♥♥♥ DO IT.
> DO NOT DO IT.
> You know of another fix? This is what resolves the issue. Also why all in caps? Stop screaming and being emo.
>
> LovelySchizoid
>
> Aug 21 @ 3:58pm
>
> Originally posted by Viper:
>
> Originally posted by LovelySchizoid:
>
> DON'T ♥♥♥♥♥♥♥ DO IT.
> DO NOT DO IT.
> You know of another fix? This is what resolves the issue. Also why all in caps? Stop screaming and being emo.
>
> Because it's like treating a headache with a bullet.
> By such decision you are opening your deepest system layer (both on software and hardware sides) to any intervention. Just wait. This is a critical issue on their part. Do not potentially trainreck your system, all your data  on your PC, because the developers are useless numbskulls.
>
> Viper
>
> Aug 21 @ 4:01pm
>
> Originally posted by LovelySchizoid:
>
> Originally posted by Viper:
> You know of another fix? This is what resolves the issue. Also why all in caps? Stop screaming and being emo.
>
> Because it's like treating a headache with a bullet.
> By such decision you are opening your deepest system layer (both on software and hardware sides) to any intervention. Just wait. This is a critical issue on their part. Do not potentially trainreck your system, all your data  on your PC, because the developers are useless numbskulls.
> Many games have the same issue, and turning it off fixes it. I suggest researching a bit more and getting informed. Also attacking the devs when the issue is probably miscrosoft? Come on now.
>
> LovelySchizoid
>
> Aug 21 @ 4:03pm
>
> Originally posted by Viper:
>
> Originally posted by LovelySchizoid:
>
> Because it's like treating a headache with a bullet.
> By such decision you are opening your deepest system layer (both on software and hardware sides) to any intervention. Just wait. This is a critical issue on their part. Do not potentially trainreck your system, all your data  on your PC, because the developers are useless numbskulls.
> Many games have the same issue, and turning it off fixes it. I suggest researching a bit more and getting informed. Also attacking the devs when the issue is probably miscrosoft? Come on now.
>
> What ever this guy is saying — don't listen to him.
> Do not turn off your core isolation. Just do not do it.
> This is a huge gamble for no reason, but faulty developer and pretty much ♥♥♥♥♥♥ game.
>
> Bubbles
>
> Aug 21 @ 4:10pm
>
> I've had the same and after a lot of searching and trying my solution was a kernel-level driver called RGB Fusion for my Gigabyte GPU. Its called inpoutx64.sys
>
> There are know issues with kernel-level drivers from Corsair (icue, old versions from CPU-Z and from RGB Fusion.) After I disabled inpoutx64.sys (I even deleted it as I couldn't care less about changing the colours of my GPUs RGB) and restarted the PC the crashes stopped. EAC has flagged this driver, its a known issue.
>
> For those who don't know, press win key, type cmd and run it as admin. Then type "sc stop inpoutx64" and if you want to delete it afterwards "sc delete inpoutx64". Then you can manually delete it from the folder. Don't forget to restart your PC afterwards. Good luck.
>
> Last edited by Bubbles;
> Aug 21 @ 4:11pm
>
> G_Medlin
>
> [developer]
>
> Aug 21 @ 4:17pm
>
> Hey, thanks for letting us know. Looking into it. All crashes are being tracked and will help us identify and curb these issues ahead of Early Access.
>
> Per page: 1530 50
>
> WARDOGS >
> WARDOGS Discussion >
> Topic Details
>
> Date Posted: Aug 21 @ 10:27am
>
> Posts: 17
>
> Discussions Rules and Guidelines
>
> More discussions
>
> 12
>
> Disappointed by the lack of FPV Drones
>
> 18
>
> Tank-Counter
>
> 0
>
> Coordination
>
> 3
>
> Positive Beta Feedback
>
> REASON
>
> Note: This is ONLY to be used to report spam, advertising, and problematic (harassment, fighting, or rude) posts.


#Steam 社区素材2
#网址：[https://steamcommunity.com/app/1867240/discussions/3/589560061703228946/](https://steamcommunity.com/app/1867240/discussions/3/589560061703228946/)
标题：Game crashes
#内容
讨论中有人通过关闭 Steam overlay 或更换输入法后成功进入，但这些是个体测试结果。该线程明确提醒 Alpha/Playtest 版本可能存在问题。关闭反作弊或系统安全保护并非官方确认方案。

### 原文（Steam 社区讨论帖 Game crashes，英文原文）

> Steam 社区讨论帖（测试期崩溃报告与个体解决经验）。

> Game crashes
>
> Please help—I'm trying to launch the game, but it crashes with an error. Here is a link to a video of the crash: https://youtu.be/ZhrKI_OsOJ4
>
> C0RVA
>
> Aug 7 @ 10:41am
>
> https://ibb.co/CpBgSBWr
>
> Maltent
>
> Aug 7 @ 12:03pm
>
> I would recommend going to where it says that dump file is at and look to see what was going just before the game crashed. It could give some insite on the issue. Also this a true alpha, so there's likely to be issues.
>
> 名字能改不
>
> Aug 10 @ 8:45pm
>
> 1. Replace/turn off Sogou Input Method: Before entering the game, switch the input method to Microsoft Pinyin, or directly exit the Sogou process. It will inject the IME DLL into each process, which conflicts with anti-cheat measures, an old problem.
>
> 2. Turn off the Steam embedded overlay: Right-click on WARDOGS Playtest in the Steam library → Properties → Disable "Enable Steam interface in game".
>
> I did this and entered normally.
>
> Nuclear Banana 🍌
>
> Aug 21 @ 7:49am
>
> I am having the same issue for the beta
>
> future
>
> Aug 21 @ 9:14am
>
> Try to restart pc. Was working for me
>
> sativa
>
> Aug 21 @ 10:19am
>
> Has anyone found a way to fix it?
>
> ragefiregames
>
> Aug 21 @ 10:27am
>
> I am facing same probelm
>
> dvogl
>
> Aug 21 @ 10:29am
>
> I had the exact same problem...
> For me activating secure boot fixed the problem.
> Sadly the crash report instantly closes, which made the troubleshooting VERY VERY annoying. Anyway try it and let me know if this helped.
>
> mantelis
>
> Aug 21 @ 12:38pm
>
> having the same exact issue :/
>
> objective - SURVIVE
>
> Aug 21 @ 1:10pm
>
> quick Question have you all with the same problem a AMD GPU?
>
> mantelis
>
> Aug 21 @ 1:18pm
>
> Originally posted by objective - SURVIVE:
> quick Question have you all with the same problem a AMD GPU?
> nope im on nvidia
>
> SneakySniper
>
> Aug 21 @ 1:21pm
>
> same thing https://cdn.discordapp.com/attachments/487016317170221056/1540452982322364496/BAF6217B-8F33-4A61-8A7D-0680818B9BD3.png?ex=6a8a0223&is=6a88b0a3&hm=fe8271dbe87b3aabd845492d365953bf20d85b97d63cacbad19b4418583b0fbf&
>
> TheGamingNomad
>
> Aug 21 @ 1:25pm
>
> same problem on nvidia drivers are updated and did try restart will try secure boot
>
> So reinstalled and activated secure boot and it seems to work now
>
> Last edited by TheGamingNomad;
> Aug 21 @ 9:08pm
>
> Raffniχ081
>
> Aug 21 @ 2:00pm
>
> My PC random Hard Restart or this Error Message
>
> MrReggae
>
> Aug 21 @ 2:48pm
>
> I've had 3 windows crashes, anyone else had the same? I've never had that before now on the beta I've had 3
>
> Per page: 1530 50
>
> WARDOGS >
> Support >
> Topic Details
>
> Date Posted: Aug 7 @ 10:40am
>
> Posts: 30
>
> Discussions Rules and Guidelines
>
> More discussions
>
> 0
>
> WARDOGS Playtest – Black screen on first launch / DX12 crash on second launch
>
> 5
>
> Geforce now Support
>
> 3
>
> Playtest invite not working
>
> 0
>
> Zeroing Distance BUG
>
> REASON
>
> Note: This is ONLY to be used to report spam, advertising, and problematic (harassment, fighting, or rude) posts.


#Steam 社区素材3
#网址：[https://steamcommunity.com/app/1867240/discussions/3/586183940257324313/](https://steamcommunity.com/app/1867240/discussions/3/586183940257324313/)
标题：WARDOGS Playtest — Black screen / DX12 crash
#内容
玩家记录了黑屏、DX12 低级错误和崩溃转储，但该报告是单个硬件与测试版本案例。它可以帮助页面说明要记录 GPU、驱动、渲染 API 与 dump 文件，却不能证明某个驱动对所有玩家都有效。正式版本需重新验证。

### 原文（Steam 社区讨论帖 Black screen / DX12 crash，英文原文）

> Steam 社区讨论帖（黑屏与 DX12 崩溃的单个硬件/版本案例报告）。

> WARDOGS Playtest – Black screen on first launch / DX12 crash on second launch
>
> Hi BULKHEAD team,
>
> I would like to report a serious launch issue I experienced with the WARDOGS Playtest.
>
> What happened
>
> First installation / first launch:
>
> I installed WARDOGS Playtest through Steam.
> I launched the game for the first time.
> The screen turned completely black, but the laptop itself was still running.
> Since the display did not recover, I had to shut the laptop down using the power button.
> After restarting Windows, the desktop appeared with a noticeably different/lower display resolution.
> Shortly afterwards, the screen went black again.
> I performed another forced shutdown and restart, but the same issue occurred again.
> After further restart attempts, Windows detected a startup problem and entered the recovery environment.
> I eventually restored Windows using a System Restore point, after which the laptop started and displayed normally again.
>
> Second installation / launch after System Restore:
>
> I reinstalled WARDOGS Playtest through Steam.
>
> This time Windows did not become unusable, but WARDOGS crashed during launch and displayed the game's Crash Report Handler.
>
> Crash information
>
> I preserved the crash dump from this attempt:
>
> PACKER_521968_17652.dmp
>
> The crash occurred on 23 August 2026 at approximately 20:39.
>
> The dump indicates a LowLevelFatalError involving Unreal Engine's DirectX 12 rendering path (D3D12RHI / D3D12Viewport).
>
> Relevant information observed in the dump:
>
> Executable: WardogsClient-Win64-Shipping.exe
> Rendering API: DirectX 12 / D3D12
> Error: 0x80004004
> Resolution at the time of the crash: 2560 x 1600
> NVIDIA Streamline/DLSS components were loaded
> Build: Wardogs Live – Changelist 491020 – Shipping
> GPU / driver
>
> GPU:
> NVIDIA GeForce RTX 5070 Ti Laptop GPU
>
> NVIDIA driver:
> 32.0.16.1088 (610.88)
> Driver date: 22 July 2026
>
> The laptop also contains:
> AMD Radeon(TM) Graphics
>
> Both GPUs currently appear normally in Windows Device Manager without warning symbols.
>
> Additional information
>
> After the forced shutdowns following the first launch, Windows also logged TPM / Secure Boot / Measured Boot related errors and BitLocker recovery was triggered during the recovery process.
>
> I cannot confirm whether these were directly caused by WARDOGS or were a consequence of the forced shutdowns/startup failures.
>
> Windows is currently working normally again after System Restore.
>
> I have not launched WARDOGS again because I do not want to reproduce the initial black-screen/system startup problem before the cause is understood.
>
> I still have the crash dump (PACKER_521968_17652.dmp) available and can provide it if needed.
>
> Please let me know if you would like the dump file, additional Windows Event Viewer information, or any other diagnostic information.
>
> Thank you!
>
> WARDOGS >
> Support >
> Topic Details
>
> Date Posted: Aug 24 @ 1:10pm
>
> Posts: 0
>
> Discussions Rules and Guidelines
>
> More discussions
>
> 0
>
> Please, let us use UEVR to play in VR.
>
> 3
>
> Error 1147405308
>
> 5
>
> Geforce now Support
>
> 30
>
> Game crashes
>
> REASON
>
> Note: This is ONLY to be used to report spam, advertising, and problematic (harassment, fighting, or rude) posts.


#官方 Steam 公告素材4
#网址：[https://steamcommunity.com/app/1867240/announcements/](https://steamcommunity.com/app/1867240/announcements/)
标题：WARDOGS | Level Design & Performance
#内容
官方称性能从开发早期就是优先事项，团队持续在多种硬件上优化，并提供图形选项调节 PC。该公告支持“先降低图形设置、更新驱动并反馈日志”的方向，但没有发布单项 crash fix。不要建议用户关闭安全隔离。

### 原文（Steam 官方公告 WARDOGS | Level Design & Performance，ISteamNews 官方接口，英文原文）

> 注：announcements 页面端点为 JS 壳，改用官方接口 `api.steampowered.com/ISteamNews/GetNewsForApp/v2/` 获取同一批公告原文。以下为 **WARDOGS | Level Design & Performance** 公告全文。

> NEW DEVLOG.
>
> Level Design & Performance
>
> [previewyoutube="UYKWRFH5VwU;full"]WARDOGS at scale, with the in-game performance players expect.
>
> Performance has been a priority for the entire team since day one, and in this episode of WARDOGS Debrief, we showcase all the work that's gone into it over the past few years.
>
> ▫️ We took our research to the real world, gathering references firsthand in Georgia
>
> ▫️ We've continuously optimised WARDOGS across a wide range of hardware
>
> ▫️ Graphics options let you tune the experience to YOUR PC
>
> And so far, the response speaks for itself. Playtesters consistently tell us how surprised they are at how well it already performs. If you'd like to experience WARDOGS for yourself, sign up for our Closed Playtesting using this link: [url="https://community.wardogs.com/signup/community"]https://community.wardogs.com/signup/community


#素材结论
- 安全排查：验证文件、更新 GPU 驱动、恢复默认图形/键位、暂时关闭 overlay，并保留日志；具体顺序需以官方支持更新为准。
- 不要关闭 Core Isolation、反作弊或系统安全功能作为默认方案。
- 若出现整机崩溃，停止重复启动并提交官方支持所需的 dump/硬件信息。

