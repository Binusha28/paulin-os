
export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  github?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "evidence-grounded-rag",
    title: "Evidence-Grounded RAG Assistant",
    category: "Generative AI",
    summary:
      "A modular retrieval-augmented generation system designed to investigate evidence-grounded document question answering.",
    technologies: [
      "Python",
      "RAG",
      "NLP",
      "Document Processing",
    ],
    highlights: [
      "Modular ingestion and retrieval architecture",
      "Document processing and text chunking",
      "Automated testing and code-quality checks",
    ],
    github:
      "https://github.com/Binusha28/evidence-rag-assistant",
  },
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Grading",
    category: "Computer Vision",
    summary:
      "Deep learning for retinal disease severity classification using ConvNeXt-Tiny and class-imbalance-aware training.",
    technologies: [
      "PyTorch",
      "ConvNeXt-Tiny",
      "Medical Imaging",
    ],
    highlights: [
      "Retinal image classification",
      "Class-imbalance-aware sampling",
      "Macro F1 and confusion-matrix evaluation",
    ],
  },
  {
    slug: "protein-localisation",
    title: "Single-Cell Protein Localisation",
    category: "Biomedical AI",
    summary:
      "Multi-label protein localisation in microscopy images using convolutional networks and vision transformers.",
    technologies: [
      "PyTorch",
      "ResNet-50",
      "SwinV2",
      "EVA-02",
    ],
    highlights: [
      "Multi-label microscopy image analysis",
      "Grouped data partitioning",
      "Class-wise average precision evaluation",
    ],
  },
  {
    slug: "sentiment-sarcasm",
    title: "Sentiment & Sarcasm Intelligence",
    category: "Natural Language Processing",
    summary:
      "Cross-variety sentiment and sarcasm classification using transformer models and parameter-efficient fine-tuning.",
    technologies: [
      "DeBERTa",
      "RoBERTa",
      "Qwen",
      "LoRA",
    ],
    highlights: [
      "Cross-variety language analysis",
      "Transformer model comparison",
      "Parameter-efficient fine-tuning",
    ],
  },
  {
    slug: "depression-prediction",
    title: "Longitudinal Depression Prediction",
    category: "AI for Healthcare",
    summary:
      "Analysis of longitudinal mental-health patterns using clustering and predictive machine learning.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Clustering",
      "Healthcare Data",
    ],
    highlights: [
      "Longitudinal data analysis",
      "Mental-health trajectory clustering",
      "Predictive model evaluation",
    ],
  },

{
  slug: "fine-grained-knife-classification",
  title: "Fine-Grained Knife Classification Using Deep Learning",
  category: "Computer Vision",
  summary:
    "A deep learning image classification project investigating the recognition of visually similar knife categories using modern convolutional neural network architectures.",
  technologies: [
    "Python",
    "PyTorch",
    "EfficientNet-B0",
    "ResNet-50",
    "MobileNetV3",
    "ConvNeXt",
  ],
  highlights: [
    "Investigated fine-grained visual classification using deep learning.",
    "Experimented with multiple convolutional neural network architectures.",
    "Applied image preprocessing, augmentation, and model training techniques.",
    "Explored comparative evaluation of image classification models.",
  ],
  github:
    "https://github.com/Binusha28/fine-grained-knife-classification",
},

];
