const rawFeedback = [
  "Saya sangat suka sesi ini. Banyak belajar tentang AI tools.",
  "Terima kasih, trainer sangat helpful. Saya harap ada sesi lanjutan.",
  "Saya nak belajar lebih pasal digital marketing guna AI.",
  "Sesi yang sangat bermanfaat untuk usahawan wanita.",
  "Boleh tambah masa untuk praktikal? Saya rasa terlalu cepat.",
  "AI tools macam Gemini and Copy.ai sangat membantu bisnes saya.",
  "Saya rasa lebih yakin sekarang untuk guna AI dalam perniagaan.",
  "Minta lebih banyak contoh kes guna AI dalam bisnes.",
  "Best! Dapat jumpa ramai usahawan lain dan jaringan bisnes.",
  "Saya suka cara trainer terangkan, mudah faham.",
  "Nak lebih sesi pasal Canva and social media marketing.",
  "Pembelajaran secara hands-on sangat membantu saya.",
  "Saya berharap ada modul tentang kewangan dan AI.",
  "Sesi networking sangat bagus untuk tambah kenalan bisnes.",
  "Trainer sangat berpengalaman dan berpengetahuan luas.",
  "Saya nak belajar cara guna AI untuk buat content marketing.",
  "Masa terlalu singkat, harap ada sesi dua hari.",
  "Saya suka aktiviti berkumpulan, sangat interaktif.",
  "Tambah lagi sesi tentang Facebook Business Suite.",
  "Saya rasa lebih bersedia untuk gunakan AI selepas training ini.",
  "Boleh sediakan nota atau modul rujukan selepas training?",
  "Saya harap ada sesi follow-up dalam masa sebulan.",
  "Topik AI untuk bisnes sangat relevan dengan saya.",
  "Saya nak belajar lebih dalam tentang AI video creation.",
  "Sesi ini patut diadakan lebih kerap untuk usahawan wanita.",
  "Saya kurang faham bahagian teknikal, perlu penjelasan lanjut.",
  "Aplikasi AI untuk pengurusan inventory sangat menarik.",
  "Saya suka pendekatan trainer yang sabar dan mesra.",
  "Nak lebih banyak tips praktikal yang boleh terus guna.",
  "Sesi ini membuka mata saya tentang potensi AI.",
  "Harap ada sesi khusus tentang AI untuk perniagaan online.",
  "Saya berharap dapat sertai lebih banyak program sebegini.",
  "Cara penyampaian sangat baik dan tersusun.",
  "Saya nak belajar optimize Facebook Ads guna AI.",
  "Boleh tambah masa untuk Q&A? Banyak soalan nak tanya.",
  "Modul tentang AI copywriting sangat membantu perniagaan saya.",
  "Saya jadi lebih berminat nak explore AI tools lain.",
  "Latihan praktikal guna AI tools sangat bernilai.",
  "Saya harap bahan latihan boleh diakses dalam talian.",
  "Nak lebih banyak sesi tentang AI untuk customer service.",
  "Penggunaan AI untuk analisis data bisnes sangat power.",
  "Trainer bagi contoh yang sangat dekat dengan situasi kami.",
  "Saya dah mula guna Copy.ai untuk content bisnes.",
  "Sesi membuat saya faham AI bukan sesuatu yang menakutkan.",
  "Boleh tambah sesi tentang etika dan keselamatan AI?",
  "Saya nak belajar pasal AI chatbot untuk bisnes.",
  "Sesi ini sangat membantu saya merancang strategi digital.",
  "Harap lebih ramai usahawan dapat manfaat dari program ini.",
  "Saya suka kombinasi teori dan praktikal dalam sesi ini.",
  "Nak lebih banyak template AI prompts yang siap guna.",
];

function cleanText(text) {
  return text.trim().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
}

function analyzeSentiment(text) {
  const positive = ["suka", "best", "bagus", "bermanfaat", "membantu", "yakin", "power", "sangat", "terbaik", "bernas", "berharga", "menarik", "sedia", "faham", "cerah", "syukur", "terima kasih", "berpengalaman", "mesra", "sabar", "baik", "interaktif"];
  const negative = ["kurang", "tidak", "susah", "sukar", "cepat", "singkat", "keliru", "rumit", "sempit", "lambat", "lemah", "terlalu", "takut", "menakutkan"];
  const lower = text.toLowerCase();
  let score = 0;
  positive.forEach(w => { if (lower.includes(w)) score += 1; });
  negative.forEach(w => { if (lower.includes(w)) score -= 1; });
  if (score > 0) return "positive";
  if (score < 0) return "negative";
  return "neutral";
}

function extractKeywords(text) {
  const stopwords = ["saya", "dan", "yang", "ini", "untuk", "dengan", "dalam", "tentang", "tidak", "ada", "boleh", "akan", "lebih", "sangat", "banyak", "dari", "ke", "di", "ia", "juga", "mereka", "kami", "kita", "pada", "selepas", "sebagai", "oleh", "atau", "jika", "supaya", "kerana", "namun", "telah", "sudah", "baru", "masih", "sahaja", "lagi", "antara", "setiap", "beberapa", "seperti", "sebab", "lalu", "maka", "selain", "sambil", "tanpa", "walaupun", "meskipun", "bahawa"];
  const words = text.toLowerCase().split(/\s+/);
  return words.filter(w => w.length > 2 && !stopwords.includes(w));
}

function extractTopics(texts) {
  const topics = {
    "AI Tools": { keywords: ["ai", "tools", "gemini", "copy.ai", "chatbot", "prompt"], count: 0, feedbacks: [] },
    "Digital Marketing": { keywords: ["marketing", "social media", "facebook", "content", "ads", "canva", "copywriting"], count: 0, feedbacks: [] },
    "Financial Management": { keywords: ["kewangan", "financial", "modal", "kos", "untung"], count: 0, feedbacks: [] },
    "Business Strategy": { keywords: ["strategi", "bisnes", "perniagaan", "usaha", "perancangan"], count: 0, feedbacks: [] },
    "Leadership": { keywords: ["pemimpin", "leader", "kepimpinan", "pasukan", "pengurusan"], count: 0, feedbacks: [] },
    "Communication": { keywords: ["komunikasi", "team", "pasukan", "jaringan", "networking"], count: 0, feedbacks: [] },
    "Technical Skills": { keywords: ["teknikal", "teknologi", "digital", "sesi", "modul", "praktikal"], count: 0, feedbacks: [] },
  };
  texts.forEach(text => {
    const lower = text.toLowerCase();
    Object.keys(topics).forEach(topic => {
      const match = topics[topic].keywords.some(k => lower.includes(k));
      if (match) {
        topics[topic].count++;
        topics[topic].feedbacks.push(text);
      }
    });
  });
  return Object.entries(topics).map(([name, data]) => ({
    name,
    count: data.count,
    feedbacks: data.feedbacks.slice(0, 3),
  })).sort((a, b) => b.count - a.count);
}

function extractSuggestions(texts) {
  const suggestionPatterns = [
    { keyword: "tambah", suggestion: "Increase session duration or frequency" },
    { keyword: "lebih", suggestion: "Add more advanced sessions" },
    { keyword: "follow-up", suggestion: "Organize follow-up sessions" },
    { keyword: "nota", suggestion: "Provide reference materials and notes" },
    { keyword: "modul", suggestion: "Prepare comprehensive training modules" },
    { keyword: "praktikal", suggestion: "Include more hands-on activities" },
    { keyword: "dalam talian", suggestion: "Make materials accessible online" },
    { keyword: "lanjutan", suggestion: "Offer advanced-level courses" },
    { keyword: "khas", suggestion: "Create specialized topic sessions" },
    { keyword: "q&a", suggestion: "Allocate more Q&A time" },
  ];
  const suggestions = [];
  suggestionPatterns.forEach(({ keyword, suggestion }) => {
    if (texts.some(t => t.toLowerCase().includes(keyword))) {
      const count = texts.filter(t => t.toLowerCase().includes(keyword)).length;
      suggestions.push({ suggestion, count });
    }
  });
  return suggestions.sort((a, b) => b.count - a.count);
}

export function processFeedback(rawData = rawFeedback) {
  const cleaned = rawData.filter(t => t.trim().length > 0).map(cleanText);
  const unique = [...new Set(cleaned)];
  const withSentiment = unique.map(text => ({ text, sentiment: analyzeSentiment(text) }));
  const positive = withSentiment.filter(f => f.sentiment === "positive");
  const neutral = withSentiment.filter(f => f.sentiment === "neutral");
  const negative = withSentiment.filter(f => f.sentiment === "negative");
  const allKeywords = unique.flatMap(extractKeywords);
  const keywordFreq = {};
  allKeywords.forEach(k => { keywordFreq[k] = (keywordFreq[k] || 0) + 1; });
  const topKeywords = Object.entries(keywordFreq).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([word, count]) => ({ word, count }));
  const topics = extractTopics(unique);
  const suggestions = extractSuggestions(unique);

  const summaryPositive = positive.length > 0 
    ? `Most participants expressed satisfaction with the training. Key highlights include practical AI tool exposure, engaging facilitators, and valuable networking opportunities.`
    : "";
  const summaryNeutral = neutral.length > 0
    ? `Some participants provided constructive input regarding session pacing, duration, and the need for more hands-on activities.`
    : "";
  const summaryNegative = negative.length > 0
    ? `A number of participants requested additional time for practice sessions, more advanced modules, and follow-up programs.`
    : "";

  const recommendedTraining = [
    { name: "Digital Marketing & Social Media", reason: "Highest demand from participants wanting Canva, Facebook Ads, and content marketing sessions.", priority: "High", confidence: 92 },
    { name: "AI Tools for Business", reason: "Strong interest in Gemini, Copy.ai, chatbot, and AI video creation tools.", priority: "High", confidence: 88 },
    { name: "Financial Management with AI", reason: "Multiple requests for financial planning and AI-powered budgeting modules.", priority: "Medium", confidence: 76 },
    { name: "Leadership & Team Management", reason: "Participants seeking confidence-building and team communication skills.", priority: "Medium", confidence: 71 },
  ];

  return {
    summary: [summaryPositive, summaryNeutral, summaryNegative].filter(Boolean).join(" "),
    total: unique.length,
    positive: positive.length,
    neutral: neutral.length,
    negative: negative.length,
    topics: topics.filter(t => t.count > 0),
    topKeywords,
    suggestions,
    recommendedTraining,
    participants: withSentiment.map(f => ({
      text: f.text,
      sentiment: f.sentiment,
      keywords: extractKeywords(f.text).slice(0, 5),
    })),
  };
}

export const sampleFeedback = rawFeedback;
