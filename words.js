const words = [
  {
    word: "accomplish",
    pos: "v.",
    meaning: "完成；實現",
    sentence: "We can accomplish our quarterly sales targets if we streamline our supply chain and improve team efficiency.",
    sentencecn: "如果我們能優化供應鏈並提高團隊效率，就能實現我們的季度銷售目標。"
  },
  {
    word: "accountable",
    pos: "adj.",
    meaning: "應負責任的",
    sentence: "Every department head is held strictly accountable for managing their budget and meeting specific performance milestones.",
    sentencecn: "每位部門主管都必須嚴格負責其預算管理，並達成特定的績效里程碑。"
  },
  {
    word: "adopt",
    pos: "v.",
    meaning: "採用；採納",
    sentence: "To remain competitive, the company must adopt sustainable manufacturing practices and reduce its carbon footprint.",
    sentencecn: "為了保持競爭力，公司必須採用永續製造實務並減少其碳足跡。"
  },
  {
    word: "ambitious",
    pos: "adj.",
    meaning: "有野心的",
    sentence: "Launching three new products in a single year is an ambitious goal that requires seamless coordination across all teams.",
    sentencecn: "一年內推出三款新產品是一個宏大的目標，需要所有團隊之間天衣無縫的協調。"
  },
  {
    word: "analyze",
    pos: "v.",
    meaning: "分析",
    sentence: "Our data scientists need to analyze the historical sales patterns to predict future demand during the peak holiday season.",
    sentencecn: "我們的數據科學家需要分析歷史銷售模式，以預測假期高峰季節的未來需求。"
  },
  {
    word: "anticipate",
    pos: "v.",
    meaning: "預期；預料",
    sentence: "Although we anticipate some market volatility, we remain confident in the long-term stability of our investment portfolio.",
    sentencecn: "雖然我們預期市場會有一些波動，但我們對投資組合的長期穩定性仍充滿信心。"
  },
  {
    word: "approach",
    pos: "n.",
    meaning: "方法；途徑",
    sentence: "Taking a customer-centric approach to product design has helped us significantly increase our user retention rate.",
    sentencecn: "採取以客戶為中心的產品設計方法，幫助我們顯著提升了用戶留存率。"
  },
  {
    word: "attend",
    pos: "v.",
    meaning: "參加；出席",
    sentence: "All regional managers are required to attend the strategic planning session to discuss the roadmap for the next fiscal year.",
    sentencecn: "所有區域經理都必須參加戰略規劃會議，以討論下一個會計年度的藍圖。"
  },
  {
    word: "behavior",
    pos: "n.",
    meaning: "行為",
    sentence: "Shifts in consumer behavior during the pandemic have forced many traditional retailers to accelerate their digital transformation.",
    sentencecn: "疫情期間消費者行為的轉轉，迫使許多傳統零售商加速其數位轉型。"
  },
  {
    word: "benefit",
    pos: "n.",
    meaning: "利益；好處",
    sentence: "The most significant benefit of the new software is its ability to automate repetitive tasks and save hundreds of man-hours.",
    sentencecn: "該新軟體最顯著的益處在於它能自動化重複性任務，並節省數百個工時。"
  },
  {
    word: "brand",
    pos: "n.",
    meaning: "品牌",
    sentence: "Maintaining a consistent visual identity is crucial for building a recognizable and trustworthy global brand.",
    sentencecn: "保持一致的視覺形象對於建立一個具辨識度且值得信賴的全球品牌至關重要。"
  },
  {
    word: "challenges",
    pos: "n.",
    meaning: "挑戰",
    sentence: "We encountered several technical challenges during the integration phase, but our engineers resolved them within the week.",
    sentencecn: "我們在整合階段遇到了一些技術挑戰，但我們的工程師在週內就解決了它們。"
  },
  {
    word: "collaborate",
    pos: "v.",
    meaning: "協作；合作",
    sentence: "The marketing and product teams must collaborate closely to ensure that the messaging aligns with the actual features.",
    sentencecn: "行銷與產品團隊必須緊密協作，以確保宣傳訊息與實際功能一致。"
  },
  {
    word: "communicate",
    pos: "v.",
    meaning: "溝通",
    sentence: "It is essential for leaders to communicate the company's vision clearly to inspire and motivate employees at all levels.",
    sentencecn: "領導者必須清晰地傳達公司願景，以激勵並啟發各個層級的員工。"
  },
  {
    word: "conclude",
    pos: "v.",
    meaning: "斷定；總結",
    sentence: "After reviewing all the financial statements, the auditors were able to conclude that the company is in excellent health.",
    sentencecn: "在審閱所有財務報表後，審計師得以斷定該公司的財務狀況非常健康。"
  },
  {
    word: "consistent",
    pos: "adj.",
    meaning: "一貫的；穩定的",
    sentence: "Providing consistent feedback to employees is a key component of building a high-performance culture within the organization.",
    sentencecn: "對員工提供一貫的反饋，是在組織內建立高效能文化的關鍵要素。"
  },
  {
    word: "contributions",
    pos: "n.",
    meaning: "貢獻 (複數)",
    sentence: "The CEO publicly acknowledged the outstanding contributions of the research team during the annual awards ceremony.",
    sentencecn: "執行長在年度頒獎典禮上，公開表彰了研發團隊的傑出貢獻。"
  },
  {
    word: "contribute",
    pos: "v.",
    meaning: "貢獻；分享",
    sentence: "Every team member is expected to contribute their unique expertise to the project to ensure its overall success.",
    sentencecn: "期望每位團隊成員都能為專案貢獻其專業知識，以確保整體的成功。"
  },
  {
    word: "coordinate",
    pos: "v.",
    meaning: "協調",
    sentence: "We need to coordinate with our international logistics partners to ensure that the shipments arrive at the warehouse on time.",
    sentencecn: "我們與國際物流夥伴協調，以確保貨物準時到達倉庫。"
  },
  {
    word: "criteria",
    pos: "n.",
    meaning: "標準；準則",
    sentence: "The selection criteria for the new vendor include cost-effectiveness, reliability, and past performance in similar projects.",
    sentencecn: "新供應商的選擇標準包括成本效益、可靠性以及在類似專案中的過往表現。"
  },
  {
    word: "decision",
    pos: "n.",
    meaning: "決定",
    sentence: "After months of deliberation, the board made the strategic decision to exit the underperforming market in Southeast Asia.",
    sentencecn: "經過數月的審議，董事會做出撤出東南亞表現不佳市場的戰略決定。"
  },
  {
    word: "dedicate",
    pos: "v.",
    meaning: "投入；致力於",
    sentence: "Our firm decided to dedicate a significant portion of its annual revenue to corporate social responsibility initiatives.",
    sentencecn: "我們公司決定將年度營收的很大一部分投入於企業社會責任計畫。"
  },
  {
    word: "demonstrate",
    pos: "v.",
    meaning: "證明；展示",
    sentence: "The quarterly results clearly demonstrate that our shift toward a subscription-based model is paying off.",
    sentencecn: "季度業績清楚證明，我們轉向訂閱制模式的轉型已見成效。"
  },
  {
    word: "discuss",
    pos: "v.",
    meaning: "討論",
    sentence: "We have organized a series of focus groups to discuss how we can improve the user interface based on direct feedback.",
    sentencecn: "我們組織了一系列焦點小組，討論如何根據直接回饋來改進使用者介面。"
  },
  {
    word: "efficient",
    pos: "adj.",
    meaning: "有效率的",
    sentence: "Developing a more efficient workflow will allow us to handle a higher volume of orders without increasing our headcount.",
    sentencecn: "開發更有效率的工作流程，將使我們能夠在不增加人力的情況下處理更多的訂單。"
  },
  {
    word: "establish",
    pos: "v.",
    meaning: "建立",
    sentence: "The company aims to establish itself as a market leader in Artificial Intelligence by investing heavily in talent acquisition.",
    sentencecn: "該公司旨在透過大量投入人才招募，將自己確立為人工智慧領域的市場領導者。"
  },
  {
    word: "evaluate",
    pos: "v.",
    meaning: "評估",
    sentence: "We will evaluate the impact of the new marketing campaign by tracking website traffic and conversion rates over the next month.",
    sentencecn: "我們將透過追蹤下個月的網站流量與轉換率，來評估新行銷活動的影響。"
  },
  {
    word: "executives",
    pos: "n.",
    meaning: "高階主管",
    sentence: "Senior executives are currently reviewing the proposal to determine its financial feasibility and strategic alignment.",
    sentencecn: "高階主管目前正在審閱該提案，以確定其財務可行性與戰略一致性。"
  },
  {
    word: "extensive",
    pos: "adj.",
    meaning: "廣泛的；大量的",
    sentence: "The legal team conducted extensive research into the patent laws of multiple countries before filing the application.",
    sentencecn: "法律團隊在提交申請前，對多個國家的專利法進行了廣泛的研究。"
  },
  {
    word: "general",
    pos: "adj.",
    meaning: "一般的；總體的",
    sentence: "The general consensus among the staff is that the new office layout fosters better communication and creativity.",
    sentencecn: "員工間的普遍共識是，新的辦公室佈局促進了更好的溝通與創意。"
  },
  {
    word: "individual",
    pos: "n.",
    meaning: "個人",
    sentence: "We believe that fostering the growth of each individual employee ultimately leads to the growth of the entire organization.",
    sentencecn: "我們相信，促進每位員工個人的成長，最終會帶動整個組織的成長。"
  },
  {
    word: "initial",
    pos: "adj.",
    meaning: "初期的",
    sentence: "Despite some initial skepticism, the new software has been widely embraced by the sales team for its ease of use.",
    sentencecn: "雖然最初有些懷疑，但這款新軟體因其易用性而受到銷售團隊的廣泛歡迎。"
  },
  {
    word: "operational",
    pos: "adj.",
    meaning: "營運上的",
    sentence: "We expect the new distribution center to become fully operational by the beginning of the third quarter.",
    sentencecn: "我們預計新的配送中心將在第三季初全面投入營運。"
  },
  {
    word: "patterns",
    pos: "n.",
    meaning: "模式",
    sentence: "Analyzing seasonal weather patterns is essential for our agricultural clients to optimize their crop planting schedules.",
    sentencecn: "分析季節性天氣模式對於我們的農業客戶優化其作物種植時程至關重要。"
  },
  {
    word: "performance",
    pos: "n.",
    meaning: "績效；表現",
    sentence: "Regular performance reviews provide an opportunity for managers to set clear goals and address any areas for improvement.",
    sentencecn: "定期的績效評估為經理人提供了設定明確目標並解決改進空間的機會。"
  },
  {
    word: "primary",
    pos: "adj.",
    meaning: "主要的",
    sentence: "Our primary objective for the upcoming trade show is to generate high-quality leads for our sales pipeline.",
    sentencecn: "我們即將參加的貿易展的首要目標，是為銷售管道開發高品質的潛在客戶。"
  },
  {
    word: "proactive",
    pos: "adj.",
    meaning: "主動積極的",
    sentence: "By taking a proactive stance on cybersecurity, we can identify and mitigate potential threats before they cause any damage.",
    sentencecn: "透過在網路安全上採取主動立場，我們可以在潛在威脅造成損害前識別並減輕它們。"
  },
  {
    word: "significant",
    pos: "adj.",
    meaning: "顯著的；重要的",
    sentence: "The merger is expected to result in significant cost savings through the consolidation of redundant operations.",
    sentencecn: "預計這次合併將透過整合重複的業務，帶來顯著的成本節省。"
  },
  {
    word: "strategy",
    pos: "n.",
    meaning: "策略",
    sentence: "Our long-term growth strategy focuses on expanding into emerging markets where there is a high demand for our services.",
    sentencecn: "我們的長期增長策略集中於擴張進入對我們服務有高度需求的新興市場。"
  },
  {
    word: "tandem",
    pos: "n.",
    meaning: "協力；合作",
    sentence: "Our engineering and design teams worked in tandem to create a product that is both functional and aesthetically pleasing.",
    sentencecn: "我們的工程與設計團隊通力合作，打造出一款兼具功能性與美感的產品。"
  },
  {
    word: "trends",
    pos: "n.",
    meaning: "趨勢",
    sentence: "Staying informed about global economic trends allows us to make better decisions regarding our international investments.",
    sentencecn: "隨時掌握全球經濟趨勢，使我們能夠在國際投資方面做出更好的決定。"
  },
  {
    word: "within",
    pos: "prep.",
    meaning: "在...之內",
    sentence: "We are committed to delivering the completed project within the agreed-upon budget and timeframe.",
    sentencecn: "我們致力於在约定的預算與時間範圍內交付完成的專案。"
  }
];
