import {API_BASE_URL} from '@env';

export const HF_DOMAIN = 'https://huggingface.co';
export const HF_API_BASE = `${HF_DOMAIN}/api/models`;

const API_BASE = API_BASE_URL || 'https://placeholder-api.example.com';

export const urls = {
  // API URLs
  modelsList: () => `${HF_API_BASE}`,
  modelTree: (modelId: string) => `${HF_API_BASE}/${modelId}/tree/main`,
  modelSpecs: (modelId: string) => `${HF_API_BASE}/${modelId}`,

  // Web URLs
  modelDownloadFile: (modelId: string, filename: string) =>
    `${HF_DOMAIN}/${modelId}/resolve/main/${filename}`,
  modelWebPage: (modelId: string) => `${HF_DOMAIN}/${modelId}`,

  // Benchmark Endpoint
  benchmarkSubmit: () => `${API_BASE}/api/v1/submit`,

  // Feedback Endpoint
  feedbackSubmit: () => `${API_BASE}/feedback`,
};
