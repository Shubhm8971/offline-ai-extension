// src/utils/promptTemplates.js
export const PROMPT_TEMPLATES = {
    writing: {
        name: "Writing Assistant",
        templates: {
            blog_post: {
                name: "Blog Post",
                prompt: "Please help me write a blog post about: {{topic}}. The tone should be {{tone}} and target audience is {{audience}}. Please include: {{requirements}}"
            },
            email: {
                name: "Professional Email",
                prompt: "Write a professional email about: {{subject}}. The recipient is {{recipient}} and the key points to include are: {{keyPoints}}. Tone should be {{tone}}."
            },
            creative: {
                name: "Creative Writing",
                prompt: "Help me write a creative story about: {{theme}}. The genre is {{genre}} and main character is {{character}}. Include elements of: {{elements}}"
            }
        }
    },
    coding: {
        name: "Code Helper",
        templates: {
            explain_code: {
                name: "Explain Code",
                prompt: "Please explain this code: {{code}}. Focus on: {{focusAreas}}. Explain it for a {{skillLevel}} level programmer."
            },
            debug: {
                name: "Debug Code",
                prompt: "Help me debug this code: {{code}}. The issue is: {{issue}}. Expected behavior: {{expected}}, Actual behavior: {{actual}}"
            },
            optimize: {
                name: "Optimize Code",
                prompt: "Optimize this code for better {{optimizationTarget}}: {{code}}. Current issues: {{issues}}"
            }
        }
    },
    analysis: {
        name: "Text Analysis",
        templates: {
            summarize: {
                name: "Summarize Text",
                prompt: "Please summarize the following text: {{text}}. Make it {{length}} words long and focus on: {{focusPoints}}"
            },
            key_points: {
                name: "Extract Key Points",
                prompt: "Extract the key points from this text: {{text}}. Format as bullet points and highlight: {{importantAspects}}"
            },
            sentiment: {
                name: "Sentiment Analysis",
                prompt: "Analyze the sentiment of this text: {{text}}. Focus on: {{aspects}} and provide insights about: {{insights}}"
            }
        }
    },
    custom: {
        name: "Custom Templates",
        templates: {
            custom_1: {
                name: "My Template 1",
                prompt: "Custom template: {{input}}"
            }
        }
    }
};

// Function to fill template with variables
export function fillPromptTemplate(template, variables) {
    let filledPrompt = template;
    for (const [key, value] of Object.entries(variables)) {
        filledPrompt = filledPrompt.replace(new RegExp(`{{${key}}}`, 'g'), value);
    }
    return filledPrompt;
}

// Function to get template by ID
export function getTemplate(category, templateId) {
    return PROMPT_TEMPLATES[category]?.templates[templateId];
}

// Function to get all categories
export function getTemplateCategories() {
    return Object.keys(PROMPT_TEMPLATES);
}