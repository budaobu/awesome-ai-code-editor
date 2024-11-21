// types/ai-editors.d.ts
interface Editor {
  name: string;
  description: string;
  url: string;
  category: string;
  pricing: string;
  features: string[];
}

interface EditorsData {
  editors: Editor[];
}

declare module "@/data/ai-editors.json" {
  const value: EditorsData;
  export default value;
}
