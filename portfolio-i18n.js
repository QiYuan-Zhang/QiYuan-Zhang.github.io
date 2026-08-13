(() => {
  "use strict";

  const STORAGE_KEY = "qy-portfolio-language";
  const ZH = "zh-CN";
  const EN = "en";

  const languageSwitchStyles = document.createElement("style");
  languageSwitchStyles.textContent =
    "@media (max-width: 767px){.qy-lang-switch-desktop{display:none!important}}";
  document.head.appendChild(languageSwitchStyles);

  const translations = Object.freeze({
    "Xuewen Zhang Portfolio | QiYuan": "Xuewen Zhang 作品集 | QiYuan",
    "Portfolio of Xuewen Zhang (QiYuan) - Building intelligent macOS software including QYFlow workflow orchestrator and QYAsst voice assistant.":
      "Xuewen Zhang（QiYuan）的作品集——专注于打造智能 macOS 软件，包括 QYFlow 工作流编排平台与 QYAsst 语音助手。",

    Home: "主页",
    "Back to Home": "返回主页",
    Projects: "项目",
    About: "关于",
    Overview: "概览",
    Features: "功能",
    Workflow: "工作流",
    Contact: "联系我",
    Portfolio: "作品集",
    "Building intelligent software that transforms how we work and interact with technology.":
      "打造智能软件，革新人与技术协作的方式。",
    "View Projects": "查看项目",
    "About Me": "关于我",
    "I’m an AI researcher and engineer specializing in intelligent decision-making and optimization for complex dynamic systems. My work combines machine learning, reinforcement learning, predictive control, and foundation models, with applications in resource scheduling, urban mobility, and industrial automation. I also build practical AI-powered tools and applications that automate workflows, enhance productivity, and make advanced AI more accessible through intuitive user experiences.":
      "我是一名 AI 研究者与工程师，专注于复杂动态系统的智能决策与优化。研究方向涵盖机器学习、强化学习、预测控制与基础模型，并应用于资源调度、城市交通和工业自动化等场景。同时，我也致力于开发实用的 AI 工具与应用，通过自动化工作流提升效率，并以直观的交互体验降低先进 AI 技术的使用门槛。",
    "Journal Papers": "期刊论文",
    "Open-Source Package Downloads": "开源工具包下载量",
    "GitHub Stars": "GitHub Stars",
    "Featured Projects": "精选项目",
    "AI-enabled macOS applications designed to enhance productivity and automate complex workflows.":
      "面向 macOS 的 AI 应用，旨在提升效率并自动化复杂工作流。",
    "AI Workflow Orchestrator": "AI 工作流编排平台",
    "An intelligent automation platform that orchestrates complex AI workflows, integrating host monitoring, Telegram bots, and supervisor pipelines for seamless task automation.":
      "一套智能自动化平台，用于编排复杂 AI 工作流，并集成主机监控、Telegram Bot 与 Supervisor Pipeline，实现端到端任务自动化。",
    "Workflow Automation": "工作流自动化",
    "AI Pipeline": "AI Pipeline",
    "System Monitoring": "系统监控",
    "Voice-First AI Assistant": "语音优先的 AI 助手",
    "A real Jarvis-like voice assistant system with multiple personas, enabling hands-free control, remote phone access, and multitasking capabilities through natural voice interaction.":
      "一套真正类似 Jarvis 的语音助手系统，支持多个 AI 角色、免手动控制、手机远程访问与多任务协同，并可通过自然语音轻松交互。",
    "Voice AI": "语音 AI",
    "Multi-Persona": "多角色协同",
    "Remote Control": "远程控制",

    "An intelligent automation platform that orchestrates complex AI workflows, integrating host monitoring, Telegram bots, and supervisor pipelines.":
      "一套智能自动化平台，用于编排复杂 AI 工作流，并集成主机监控、Telegram Bot 与 Supervisor Pipeline。",
    "Integrated Systems": "集成系统",
    Monitoring: "实时监控",
    Automation: "自动化",
    "Manual Steps": "人工步骤",
    "Central Command Center": "中央指挥中心",
    "QiYuanFlow Desktop UI": "QiYuanFlow 桌面端 UI",
    "A powerful desktop application that serves as the brain of your automation workflow. Built with native macOS technologies for seamless integration and performance.":
      "一款强大的桌面应用，是自动化工作流的核心中枢。基于 macOS 原生技术构建，实现无缝集成与高效运行。",
    "24/7 AI assistance worker for always-on task execution": "24/7 AI 助手持续在线执行任务",
    "Real-time task monitoring and status tracking": "实时监控任务并追踪状态",
    "Conda environment management integration": "集成 Conda 环境管理",
    "Automated code generation and execution": "自动生成并执行代码",
    "Visual pipeline configuration": "可视化配置 Pipeline",
    "Main Dashboard": "主控制面板",
    "Central workflow orchestration interface": "统一编排工作流的核心界面",
    "Chat History & File Vault": "对话历史与文件库",
    "Persistent conversation timeline with generated files organized for quick retrieval and traceability.":
      "持续保存对话时间线，并集中整理生成的文件，便于快速检索与追溯。",
    "Submit New Projects": "提交新项目",
    "Create and submit new project requests from the dashboard. Can also submit via Telegram remotely.":
      "可在控制面板中创建并提交新项目，也支持通过 Telegram 远程提交。",
    "Live logs": "实时日志",
    "Stream execution progress and status updates in real time for fast debugging and pipeline visibility.":
      "实时展示执行进度与状态更新，便于快速调试并掌握 Pipeline 运行情况。",
    "Real-time System Intelligence": "实时系统智能",
    "Host Monitor": "主机监控",
    "Monitor multiple remote hosts with AI-powered anomaly detection. Get instant alerts, track performance metrics, and maintain system health across your infrastructure.":
      "借助 AI 异常检测同时监控多台远程主机，实时接收告警、追踪性能指标，并持续保障基础设施健康运行。",
    "Multi-host simultaneous monitoring": "同时监控多台主机",
    "AI-powered anomaly detection": "AI 驱动的异常检测",
    "CPU, memory, disk, and network metrics": "CPU、内存、磁盘与网络指标",
    "Customizable alert thresholds": "可自定义告警阈值",
    "Historical data analysis and trends": "历史数据分析与趋势洞察",
    "Remote Security Monitor": "远程安全监控",
    "Real-time remote security and host status overview.": "实时掌握远程安全状况与主机状态。",
    "Monitor Dashboard": "监控面板",
    "Detailed performance graphs, metrics analysis, and system status overview.":
      "通过详细的性能图表、指标分析与系统状态概览掌握运行情况。",
    "Remote Web Chat History": "远程网页对话历史",
    "Access remote web chat history for quick review, tracking, and follow-up.":
      "访问远程网页对话历史，便于快速回顾、追踪与跟进。",
    "Remote Web File Vault": "远程网页文件库",
    "Browse and retrieve remotely generated files from a dedicated web vault.":
      "通过独立的网页文件库浏览并获取远程生成的文件。",
    "Remote Control at Your Fingertips": "随时随地远程掌控",
    "AI Telegram Bots": "AI Telegram Bots",
    "Multiple intelligent Telegram bots that allow you to control, monitor, and interact with your automation system from anywhere. Receive notifications and execute commands via chat.":
      "多个智能 Telegram Bot，让你随时随地控制、监控自动化系统并与其交互，还可通过聊天接收通知和执行指令。",
    "Multiple bot personas for different tasks": "多个 Bot 角色分别处理不同任务",
    "Natural language command processing": "自然语言指令处理",
    "Real-time system notifications": "实时系统通知",
    "File sharing and output delivery": "文件共享与结果交付",
    "Secure authentication and access control": "安全身份验证与访问控制",
    "Monitor Bot": "监控 Bot",
    "Remote host URL and OTP acquisition via Telegram.": "通过 Telegram 获取远程主机 URL 与 OTP。",
    "Project List Check": "项目列表检查",
    "Review project list status and verify deliverables before submission.":
      "检查项目列表状态，并在提交前核验交付成果。",
    "Subtask and Progress Check": "子任务与进度检查",
    "Track subtasks and monitor execution progress directly from remote chat.":
      "直接在远程聊天中追踪子任务并监控执行进度。",
    "Project Completion": "项目完成确认",
    "Confirm completed tasks and final delivery status in chat.": "在聊天中确认任务完成情况与最终交付状态。",
    "Status Snapshot": "状态快照",
    "Get a quick snapshot of workflow state and recent updates.": "快速查看工作流状态与最新进展。",
    "Subtask Report": "子任务报告",
    "Subtask report with completion status and execution summary.": "展示完成状态与执行摘要的子任务报告。",
    "Supervisor Revise": "Supervisor 修订",
    "Checklist showcase for missing or failed items.": "以检查清单呈现缺失项或失败项。",
    "Supervisor Pipeline": "Supervisor Pipeline",
    "How It Works": "工作原理",
    "Understanding the complete flow from human instruction to automated output generation":
      "完整呈现从人工指令到自动生成结果的全流程",
    "Level 1: Multi-Task Orchestration (Parallel)": "第 1 层：多任务并行编排",
    "Agentic LLM Workflows (Parallel)": "Agentic LLM 工作流（并行）",
    Pause: "暂停",
    Play: "播放",
    Phase: "阶段",
    Schedule: "调度",
    Feedback: "反馈",
    "Task Pool": "任务池",
    "Task 1": "任务 1",
    "Task 2": "任务 2",
    "Task 3": "任务 3",
    "Paper Writing": "论文写作",
    "Code Refactor": "代码重构",
    "Slide Generation": "幻灯片生成",
    "Agentic LLM\nWorkflow": "Agentic LLM\n工作流",
    "Agentic LLM Workflow": "Agentic LLM 工作流",
    "Click to explore →": "点击查看 →",
    "Human Feedback\nCheckpoint": "人工反馈\n检查点",
    "Human Feedback Checkpoint": "人工反馈检查点",
    Checkpoint: "检查点",
    Output: "输出",
    Controller: "控制器",
    "Scheduler + Priority + Cooldown": "调度 + 优先级 + 冷却机制",
    "Tasks Picked from Pool": "从任务池选取任务",
    "All tasks process this stage in parallel": "所有任务并行处理此阶段",
    "Task / Process": "任务 / 流程",
    "Human Feedback": "人工反馈",
    "Context Retrieval": "上下文检索",
    Review: "审核",
    Memory: "记忆",
    "System Architecture": "系统架构",
    "A unified platform bringing together monitoring, automation, and AI.":
      "将监控、自动化与 AI 融为一体的统一平台。",
    "Input Layer": "输入层",
    "Human instructions, API calls, scheduled triggers, and Telegram commands":
      "人工指令、API 调用、定时触发与 Telegram 命令",
    "Processing Layer": "处理层",
    "Supervisor pipeline, code execution, error handling, and retry logic":
      "Supervisor Pipeline、代码执行、错误处理与重试逻辑",
    "Output Layer": "输出层",
    "Reports, notifications, visualizations, logs, and file delivery":
      "报告、通知、可视化、日志与文件交付",

    "Your real Jarvis system. Multiple AI personas, hands-free voice control, remote access, and multitasking - all working together seamlessly.":
      "真正属于你的 Jarvis 系统：多个 AI 角色、免手动语音控制、远程访问与多任务协同无缝配合。",
    "AI Personas": "AI 角色",
    "Hands-Free": "免手动操作",
    "Response Time": "响应时间",
    Availability: "全天候可用",
    "Meet Your AI Team": "认识你的 AI 团队",
    "Multiple specialized personas, each optimized for different tasks.":
      "多个专业 AI 角色，分别针对不同任务进行优化。",
    "Fully customizable - design the persona that fits you best.":
      "支持全面自定义，打造最适合你的 AI 角色。",
    "Executive Operations AI": "执行运营 AI",
    "Calm, strategic, and always in control. Handles complex tasks with precision and clarity. Your reliable right hand for getting things done.":
      "沉稳、有策略，始终掌控全局。能够精准、清晰地处理复杂任务，是值得信赖的执行助手。",
    "Creative Partner": "创意伙伴",
    "Sharp mind, warm heart, reads the room instantly. Balances creativity with practical thinking. Makes every idea better with a personal touch.":
      "思维敏锐、富有温度，能够迅速理解情境。在创意与务实之间取得平衡，让每个想法都更完善、更具个性。",
    "Systems Architect": "系统架构师",
    "Pure logic, zero fluff, always accurate. Monitors systems and catches what others miss. Your reality check when precision matters most.":
      "逻辑至上、言简意赅、始终准确。持续监控系统并发现容易被忽略的问题，在最需要精度时提供可靠判断。",
    "Core Capabilities": "核心能力",
    "Everything you need for a true hands-free AI experience.": "打造真正免手动 AI 体验所需的一切能力。",
    "Natural Voice Interaction": "自然语音交互",
    "Speak naturally and get instant responses. Advanced speech recognition understands context and intent.":
      "自然说出需求，即刻获得响应。先进的语音识别能够理解上下文与真实意图。",
    "How to use:": "使用方式：",
    "Say the wake word to activate": "说出唤醒词即可激活",
    "Speak your command naturally": "自然说出指令",
    "Wait for voice confirmation": "等待语音确认",
    "Continue the conversation": "继续对话",
    "Multiple AI Personas": "多个 AI 角色",
    "Switch between different AI personalities optimized for specific tasks - from general assistance to technical expertise.":
      "可在针对不同任务优化的 AI 角色之间切换，覆盖日常协助到专业技术支持。",
    "Say \"Hi Nova\"": "说出“Hi Nova”",
    "Or simply click a persona icon": "或直接点击角色图标",
    "Each persona has unique abilities": "每个角色都拥有独特能力",
    "Personas remember context": "各角色都能记住上下文",
    "Remote Phone Access": "手机远程访问",
    "Control your Mac remotely via your iPhone. Execute commands, check status, and manage tasks from anywhere.":
      "通过 iPhone 远程控制 Mac，随时随地执行指令、查看状态并管理任务。",
    "Use Telegram on iOS (currently in use)": "在 iOS 上使用 Telegram（当前方案）",
    "Connect to your Mac via secure link": "通过安全链接连接 Mac",
    "Send voice or text commands": "发送语音或文字指令",
    "Receive real-time feedback": "实时接收反馈",
    "Multitask Conducting": "多任务协同调度",
    "Assign multiple tasks to different personas simultaneously. Each works independently while you stay productive.":
      "同时将多个任务分配给不同 AI 角色；各角色独立执行，让你始终保持高效。",
    "Initiate multiple tasks": "同时发起多个任务",
    "Assign to different personas": "分配给不同 AI 角色",
    "Monitor progress in dashboard": "在控制面板中查看进度",
    "Get notified on completion": "任务完成后接收通知",
    "Hands-Free Control": "免手动控制",
    "True hands-free operation. Voice-activated everything - from app control to system settings.":
      "实现真正的免手动操作，从应用控制到系统设置均可通过语音完成。",
    "Enable always-listening mode": "开启持续聆听模式",
    "Use voice for all interactions": "全程使用语音交互",
    "Gesture support optional": "可按需启用手势支持",
    "Full accessibility compliance": "完整支持无障碍功能",
    "Adaptive Memory": "自适应记忆",
    "Each persona keeps memory of your preferences and learns from other personas' knowledge for better collaboration.":
      "每个 AI 角色都会记住你的偏好，并共享其他角色积累的知识，从而实现更高效的协作。",
    "Set your preference profile once": "一次设置个人偏好",
    "Each persona remembers your preference": "每个角色都会记住你的偏好",
    "Personas share useful knowledge across tasks": "各角色在任务间共享有用知识",
    "Update or reset memory anytime": "随时更新或重置记忆",
    "From voice command to task completion in seconds.": "从语音指令到任务完成，仅需数秒。",
    "Voice Input": "语音输入",
    "Speak your command naturally": "自然说出指令",
    "AI Processing": "AI 处理",
    "Context-aware understanding": "理解上下文与意图",
    "Persona Selection": "角色选择",
    "Route to best-fit persona": "分配给最合适的角色",
    Execution: "执行",
    "Task completed, feedback given": "完成任务并返回反馈",
    "Experience QYAsst": "体验 QYAsst",
    "See the voice assistant in action": "直观了解语音助手的实际表现",
    "Standby Mode": "待机模式",
    "Ready for wake-word interaction": "随时响应唤醒词",
    "Conducting task": "任务执行",
    "Multiple personalities for different tasks": "多个 AI 角色分工处理不同任务",
    "Communication Mode": "通信模式",
    "Control your Mac from anywhere": "随时随地控制 Mac",
    "Multi-tasking Mode": "多任务模式",
    "Handle multiple tasks simultaneously": "同时处理多个任务",
    "Allow Text Input": "支持文字输入",
    "Type and send text queries seamlessly": "顺畅输入并发送文字请求",
    "See It In Action": "查看实际演示",
    "Watch how QYAsst brings intelligence to your workflow": "了解 QYAsst 如何为工作流注入智能",
    "Communication with your Persona": "与你的 AI 角色交流",
    "See how Javris, Nova, and Lyra interact with you": "看看 Javris、Nova 与 Lyra 如何与你互动",
    "Write files and check weather using Chrome": "通过 Chrome 写入文件并查询天气",
    "Hands-free file operations and real-time web browsing": "免手动操作文件并实时浏览网页",
    "Remote Control from Phone": "通过手机远程控制",
    "Control your Mac remotely via QYAsst on your iPhone": "通过 iPhone 上的 QYAsst 远程控制 Mac",
    "Send Photos and Ask Anything": "发送照片，自由提问",
    "Share images directly and let your AI persona respond with context":
      "直接分享图片，让 AI 角色结合上下文作出回应",
    "Spark Ideas of Projects": "激发项目创意",
    "Draw inspiration from your existing work and let your AI build on it":
      "从已有工作中获取灵感，让 AI 在此基础上继续拓展",
    "Your Personal AI Assistant Awaits": "你的专属 AI 助手已准备就绪",
    "Experience the future of hands-free computing with QYAsst.": "通过 QYAsst，体验免手动计算的未来。",

    "Let's Connect": "期待与你交流",
    "Interested in AI-powered solutions? Let's discuss how we can collaborate on your next project.":
      "如果你对 AI 驱动的解决方案感兴趣，欢迎联系我，一起探讨下一个项目的合作机会。",
    "Send Email": "发送邮件",
    "Q's AI Works Portfolio": "Q 的 AI 作品集",
    "All rights reserved.": "保留所有权利。",

    "QYFlow preview": "QYFlow 预览",
    "QYAsst preview": "QYAsst 预览",
    "QYFlow software icon": "QYFlow 软件图标",
    "QYAsst software icon": "QYAsst 软件图标",
    "Javris icon": "Javris 图标",
    "Nova icon": "Nova 图标",
    "Lyra icon": "Lyra 图标",
    "Scroll left": "向左滚动",
    "Scroll right": "向右滚动",
  });

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = EN;
  let observerQueued = false;
  let applying = false;

  function selectedLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested && requested.toLowerCase().startsWith("zh")) return ZH;
    if (requested && requested.toLowerCase().startsWith("en")) return EN;
    try {
      return localStorage.getItem(STORAGE_KEY) === ZH ? ZH : EN;
    } catch (_) {
      return EN;
    }
  }

  function translatedKey(key) {
    if (translations[key]) return translations[key];

    let match = key.match(/^Open (.+)$/);
    if (match) return `打开${translations[match[1]] || match[1]}`;

    match = key.match(/^Enlarge (.+)$/);
    if (match) return `放大查看${translations[match[1]] || match[1]}`;

    match = key.match(/^Go to image (\d+)$/);
    if (match) return `查看第 ${match[1]} 张图片`;

    match = key.match(/^Go to slide (\d+)$/);
    if (match) return `查看第 ${match[1]} 项`;

    return key;
  }

  function translateValue(value) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const translated = translatedKey(trimmed);
    if (translated === trimmed) return value;
    const start = value.indexOf(trimmed);
    return value.slice(0, start) + translated + value.slice(start + trimmed.length);
  }

  function shouldIgnoreText(node) {
    const parent = node.parentElement;
    return (
      !parent ||
      parent.closest("script, style, noscript, video, audio, .qy-lang-switch") !== null
    );
  }

  function localizeTextNode(node) {
    if (shouldIgnoreText(node)) return;

    let original = originalText.get(node);
    const current = node.nodeValue;
    if (original === undefined) {
      original = current;
      originalText.set(node, original);
    } else if (language === ZH && current !== original && current !== translateValue(original)) {
      original = current;
      originalText.set(node, original);
    }

    const wanted = language === ZH ? translateValue(original) : original;
    if (current !== wanted) node.nodeValue = wanted;
  }

  function localizeAttribute(element, attribute) {
    const current = element.getAttribute(attribute);
    if (current === null) return;

    let attributes = originalAttributes.get(element);
    if (!attributes) {
      attributes = new Map();
      originalAttributes.set(element, attributes);
    }

    let original = attributes.get(attribute);
    if (original === undefined) {
      original = current;
      attributes.set(attribute, original);
    } else if (language === ZH && current !== original && current !== translateValue(original)) {
      original = current;
      attributes.set(attribute, original);
    }

    const wanted = language === ZH ? translateValue(original) : original;
    if (current !== wanted) element.setAttribute(attribute, wanted);
  }

  function localizeContent() {
    const root = document.querySelector("main");
    if (!root) return;

    applying = true;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) localizeTextNode(node);

    root.querySelectorAll("[alt], [aria-label], [title], [placeholder]").forEach((element) => {
      ["alt", "aria-label", "title", "placeholder"].forEach((attribute) =>
        localizeAttribute(element, attribute),
      );
    });

    document.documentElement.lang = language;
    document.documentElement.dataset.siteLanguage = language;
    document.title = language === ZH ? translations["Xuewen Zhang Portfolio | QiYuan"] : "Xuewen Zhang Portfolio | QiYuan";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content =
        language === ZH
          ? translations[
              "Portfolio of Xuewen Zhang (QiYuan) - Building intelligent macOS software including QYFlow workflow orchestrator and QYAsst voice assistant."
            ]
          : "Portfolio of Xuewen Zhang (QiYuan) - Building intelligent macOS software including QYFlow workflow orchestrator and QYAsst voice assistant.";
    }
    applying = false;
  }

  function switchClasses(mobile) {
    return mobile
      ? "qy-lang-switch qy-lang-switch-mobile inline-flex w-fit px-6 py-3 border border-border rounded-full text-lg font-medium text-foreground hover:bg-muted transition-all"
      : "qy-lang-switch qy-lang-switch-desktop inline-flex px-3 py-2 border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all";
  }

  function createSwitch(mobile) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = switchClasses(mobile);
    button.addEventListener("click", () => setLanguage(language === ZH ? EN : ZH, true));
    return button;
  }

  function updateSwitches() {
    document.querySelectorAll(".qy-lang-switch").forEach((button) => {
      const mobile = button.classList.contains("qy-lang-switch-mobile");
      const text = language === ZH ? (mobile ? "English" : "EN") : "中文";
      const label = language === ZH ? "切换到英文" : "Switch to Chinese";
      if (button.textContent !== text) button.textContent = text;
      if (button.getAttribute("aria-label") !== label) button.setAttribute("aria-label", label);
      if (button.getAttribute("title") !== label) button.setAttribute("title", label);
    });
  }

  function ensureSwitches() {
    document.querySelectorAll("header").forEach((header) => {
      const contact = header.querySelector('a[href="#contact"]');
      if (contact && !contact.parentElement.querySelector(".qy-lang-switch-desktop")) {
        contact.insertAdjacentElement("afterend", createSwitch(false));
      }
    });

    document.querySelectorAll("div.fixed.inset-0.z-40").forEach((menu) => {
      const contact = menu.querySelector('a[href="#contact"]');
      if (contact && !contact.parentElement.querySelector(".qy-lang-switch-mobile")) {
        contact.insertAdjacentElement("afterend", createSwitch(true));
      }
    });

    updateSwitches();
  }

  function syncUrl() {
    const url = new URL(window.location.href);
    if (language === ZH) url.searchParams.set("lang", "zh");
    else url.searchParams.delete("lang");
    history.replaceState(history.state, "", url.pathname + url.search + url.hash);
  }

  function setLanguage(nextLanguage, userInitiated) {
    language = nextLanguage;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_) {
      // Language switching still works when storage is unavailable.
    }
    if (userInitiated) syncUrl();
    localizeContent();
    ensureSwitches();
  }

  function applyAfterMutation() {
    if (applying) return;
    if (observerQueued) return;
    observerQueued = true;
    queueMicrotask(() => {
      observerQueued = false;
      localizeContent();
      ensureSwitches();
    });
  }

  function start() {
    language = selectedLanguage();
    setLanguage(language, false);

    const observer = new MutationObserver(applyAfterMutation);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
