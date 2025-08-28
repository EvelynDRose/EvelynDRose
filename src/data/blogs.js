const blogs = [
  {
    id: "reinforcement-learning",
    title: "Exploring Reinforcement Learning",
    date: "Aug 25, 2025",
    summary: "A deep dive into reward shaping and policy optimization.",
    tags: ["Reinforcement Learning", "AI", "Research"],
    content: `
      Reinforcement learning (RL) is a paradigm in machine learning where agents
      learn by interacting with their environment. In this article, I explore
      the challenges of reward shaping, distribution imbalance, and the latest
      approaches like RbRL and TAMER.

      ## Key Takeaways
      - Reward design is hard but crucial.
      - Offline RL is becoming increasingly important.
      - Human feedback is shaping the next wave of RL (RLHF).
    `
  },
  {
    id: "nlp-transformers",
    title: "Transformers in NLP",
    date: "July 15, 2025",
    summary: "Understanding how transformers revolutionized natural language processing.",
    tags: ["NLP", "Transformers", "Deep Learning"],
    content: `
      Transformers introduced self-attention, allowing models to capture long-range
      dependencies in text. Hugging Face made it easy for practitioners to fine-tune
      large models on their own datasets.

      ## Applications
      - Sentiment analysis
      - Machine translation
      - Text summarization
    `
  }
];

export default blogs;