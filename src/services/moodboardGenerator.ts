
export interface MoodboardGenerationParams {
  dress?: string;
  venue?: string;
  cake?: string;
  decor?: string;
  florals?: string;
  photography?: string;
}

export interface GeneratedMoodboardContent {
  category: string;
  suggestions: string[];
  colorPalette: string[];
  styleDescription: string;
}

export class MoodboardGeneratorService {
  private apiKey: string | null = null;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || null;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateMoodboard(params: MoodboardGenerationParams): Promise<GeneratedMoodboardContent[]> {
    if (!this.apiKey) {
      throw new Error('API key is required for moodboard generation');
    }

    const prompt = this.buildPrompt(params);
    
    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a wedding planning expert. Provide wedding inspiration suggestions in JSON format only. Be creative and specific.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 1500,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0]?.message?.content;
      
      try {
        return JSON.parse(content);
      } catch (parseError) {
        // Fallback if JSON parsing fails
        return this.getFallbackSuggestions(params);
      }
    } catch (error) {
      console.error('Moodboard generation error:', error);
      return this.getFallbackSuggestions(params);
    }
  }

  private buildPrompt(params: MoodboardGenerationParams): string {
    const categories = Object.entries(params)
      .filter(([_, value]) => value)
      .map(([category, item]) => `${category}: ${item}`)
      .join(', ');

    return `Based on these wedding selections: ${categories}
    
    Generate complementary wedding inspiration suggestions in this exact JSON format:
    [
      {
        "category": "overall_theme",
        "suggestions": ["suggestion1", "suggestion2", "suggestion3"],
        "colorPalette": ["#color1", "#color2", "#color3"],
        "styleDescription": "description of the overall style"
      },
      {
        "category": "additional_decor",
        "suggestions": ["suggestion1", "suggestion2", "suggestion3"],
        "colorPalette": ["#color1", "#color2", "#color3"],
        "styleDescription": "description of complementary decor"
      }
    ]`;
  }

  private getFallbackSuggestions(params: MoodboardGenerationParams): GeneratedMoodboardContent[] {
    return [
      {
        category: "Overall Theme",
        suggestions: ["Elegant Garden Party", "Classic Romance", "Modern Minimalist"],
        colorPalette: ["#f8f4f0", "#d4b896", "#8b7355"],
        styleDescription: "A cohesive theme that brings together all your wedding elements beautifully."
      },
      {
        category: "Additional Ideas",
        suggestions: ["Ambient Lighting", "Seasonal Touches", "Personal Details"],
        colorPalette: ["#faf7f2", "#e6d7c3", "#c9b382"],
        styleDescription: "Complementary elements to enhance your wedding vision."
      }
    ];
  }
}
