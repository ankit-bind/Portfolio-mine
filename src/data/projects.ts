export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  tech: string[];
  achievements: string[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "loan-recovery",
    title: "AI-Based Loan Recovery Prediction",
    year: "2026",
    blurb:
      "AI-powered Loan Recovery Probability Prediction system using Machine Learning, feature engineering, behavioral risk analysis, and explainable AI. Analyzes borrower financial history, bureau records, repayment patterns, and social risk behavior to predict loan recovery probability and support optimized debt recovery decisions.",
    tech: ["Python", "Machine Learning", "Streamlit", "Feature Engineering", "Explainable AI", "Risk Analysis"],
    achievements: [
      "Built end-to-end ML pipeline for loan recovery probability prediction",
      "Implemented feature engineering and behavioral risk analysis",
      "Developed interactive Streamlit dashboard for explainable AI insights",
      "Analyzed borrower financial history, bureau records, and repayment patterns",
    ],
    primary: { label: "View Code", href: "https://github.com/ankit-bind/AI-Based-Loan-Recovery-Prediction" },
    secondary: { label: "View Details", href: "https://github.com/ankit-bind/AI-Based-Loan-Recovery-Prediction/blob/main/README.md" },
  },
  {
    slug: "stock-prediction",
    title: "Stock Market Predictive Analysis",
    year: "2025",
    blurb:
      "Predictive modeling on historical equities time-series — engineered features, evaluated reliability, and reviewed every output for overfit and bias.",
    tech: ["Python", "Machine Learning", "Statistical Modeling", "Pandas"],
    achievements: [
      "Cleaned and engineered features from historical time-series data",
      "Built and evaluated predictive models for reliability and accuracy",
      "Reviewed model outputs critically to avoid overfitting and bias",
    ],
    primary: { label: "View Code", href: "https://github.com/ankit-bind/Stock-Pulse.git" },
    secondary: { label: "View Details", href: "https://github.com/ankit-bind/Stock-Pulse/blob/master/README.md" },
  },
];
