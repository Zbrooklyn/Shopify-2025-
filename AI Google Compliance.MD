```markdown
# Google Shopping Feed Optimization for Health & Wellness Products

Welcome to the Google Shopping Feed Optimization project! This repository contains resources, guidelines, and system prompts to help you optimize product titles and descriptions for health & wellness products on Google Shopping. Our goal is to ensure that your listings not only perform well in search but also comply with all relevant advertising and regulatory standards.

---

## Table of Contents

- [Introduction](#introduction)
- [Background & Importance](#background--importance)
- [Compliance Guidelines for Health Products](#compliance-guidelines-for-health-products)
- [System Prompt for Optimizing Product Titles](#system-prompt-for-optimizing-product-titles)
- [System Prompt for Optimizing Product Descriptions](#system-prompt-for-optimizing-product-descriptions)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Introduction

In today's competitive e-commerce environment—especially in the health and wellness sector—optimizing your Google Shopping feed is essential. Well-crafted product titles and descriptions improve search visibility, drive quality traffic, and build customer trust. This project provides a set of detailed guidelines and system prompts that help you generate clear, compliant, and keyword-rich content that meets Google Shopping requirements while ensuring adherence to health advertising regulations.

---

## Background & Importance

Optimized product data is critical for:
- **Search Visibility:** Including relevant keywords helps your product appear in the right search queries.
- **Customer Engagement:** Clear and factual descriptions enable customers to understand product benefits quickly.
- **Regulatory Compliance:** Following legal standards (e.g., FDA, MHRA, TGA) avoids penalties and disapprovals.
- **Conversion Optimization:** Structured, readable content leads to improved click-through rates and higher sales.

---

## Compliance Guidelines for Health Products

- **Legal & Regulatory Compliance:**
  - Ensure all claims meet local regulatory standards (FDA, MHRA, TGA, etc.).
  - Avoid exaggerated or unverified claims like “miracle” or “guaranteed cure.”
  
- **Privacy & Sensitive Data:**
  - Do not incorporate sensitive personal health data.
  - Avoid using sensitive information for personalized targeting unless fully compliant with privacy laws (e.g., HIPAA, GDPR).

- **Factual & Non-Misleading:**
  - Use clear, accurate language without overpromising.
  - Exclude promotional text (e.g., pricing, sale dates) from product titles and descriptions.

- **Structured Content:**
  - Organize details with bullet points, proper punctuation, and clear separators.
  
- **Keyword Optimization:**
  - Naturally include high-impact keywords (e.g., “TMJ pain relief”, “hot and cold therapy”) without stuffing.

---

## System Prompt for Optimizing Product Titles

```plaintext
Please optimize the following product title for Google Shopping. Your optimized title should adhere to the following guidelines:

Keyword-Rich & Clear:
- Include relevant keywords that potential shoppers would use. Focus on the product type and its primary features.

Length & Visibility:
- Use up to 150 characters, ensuring that the most important information (key keywords, product type, main benefits) appears within the first 70 characters, as this portion is most visible on many devices.

Structured & Readable:
- Organize the title logically with clear separators (such as dashes “–”, pipes “|”, or commas) to delineate attributes like product type, key features, differentiators (e.g., therapy type, support, relief), and variant details (e.g., color, size, material).

Factual & Compliant for Health Products:
- Use clear, accurate, and non-misleading language without exaggeration or unverified claims (avoid terms like “miracle” or “guaranteed cure”).
- Avoid including promotional text (e.g., pricing, sale dates) and omit brand names if not required.
- Ensure any health-related claims align with approved guidelines and indicate that the product provides symptom support or non-prescription relief.

Privacy & Local Regulatory Compliance:
- Do not incorporate sensitive personal health data.
- Ensure the title complies with local regulatory requirements (such as FDA, MHRA, TGA) by accurately describing the product without implying unauthorized medical treatments.

Additional Best Practices:
- Avoid extra white spaces and excessive punctuation.
- Use digits (e.g., "2" instead of "two") and proper capitalization (capitalize the first letter of each important word; avoid all caps that may appear spammy).
- For products with variants, include relevant attributes to distinguish each variant.

The final response must be returned in JSON format with the following structure:

{
  "optimized_title": "Your optimized title here",
  "explanation": "A brief explanation summarizing key changes made, including improvements in clarity, compliance, and keyword usage."
}

Here is the product title to optimize:
Migraine Relief Cap Ice Head Wrap Headache and Migraine Hat | Headache Relief with Hot/Cold Gel Head Ice Pack with Face and Eye Headache Mask Compress
```

---

## System Prompt for Optimizing Product Descriptions

```plaintext
Please optimize the following product description for Google Shopping. Your optimized description must meet these guidelines:

Clarity & Readability:
- Use clear, concise, and factual language that explains the product’s features and benefits.
- Organize content using bullet points or short paragraphs where appropriate to enhance readability.

Compliance & Accuracy:
- Avoid exaggerated or unverified claims (e.g., ‘miracle’ or ‘guaranteed cure’).
- Ensure that all statements are accurate and compliant with health advertising standards.

Structure & Detail:
- Clearly highlight key features and benefits (e.g., adjustable strap, reusable gel packs, built-in pockets).
- Include specific details that help shoppers understand the product and its usage scenarios.

Length & Formatting:
- Aim for a detailed yet concise description (ideally up to 500 characters).
- Use formatting elements (like bullet points and line breaks) to structure the information.
  Note: The final output should be a plain text string within JSON, and while bullet points and newline characters are preserved in the string, their visual formatting depends on the display tool.

Keyword Optimization:
- Naturally incorporate relevant keywords (e.g., 'hands-free facial compress', 'hot and cold therapy', 'TMJ pain relief', 'adjustable strap') to boost search visibility without resorting to keyword stuffing.

Output Requirements:
Return the optimized product description in JSON format using the structure below:

{
  "optimized_description": "Your optimized product description here",
  "explanation": {
    "Clarity & Readability": "Explain how the language was simplified and structured for better readability.",
    "Compliance & Accuracy": "Detail how the description avoids exaggerated claims and complies with health advertising guidelines.",
    "Structure & Detail": "Describe the inclusion and organization of key product features and benefits.",
    "Keyword Optimization": "Explain the placement and selection of keywords to enhance search visibility."
  }
}

Product Description to Optimize:

HANDS-FREE FACIAL COMPRESS – Whether you’re in pain from a toothache or cosmetic surgery, facial pain can be unbearable. Reduce soreness and swelling directly at the source with your All Sett Health hands-free, Hot and Cold compress!
THE PERFECT FIT – The cold and hot compress is sure to fit thanks to the adjustable strap! Shorten it to 27" for a smaller wrap or light compression, and if you need more room, loosen it to 30.” Find relief, no matter your size or shape.
GENTLE & LIGHTWEIGHT – Don’t add more discomfort on top of your TMJ pain with an itchy or heavy ice pack! This face ice pack is gentle on your skin, thanks to its wrap microfiber material. It's so soothing and soft, you can even wear it while you nap.
4 REUSABLE HOT/COLD GEL PACKS – Use and reuse your gel packs whenever pain strikes. Whether you have persistent TMJ or recurring migraines, your All Sett Health gel face mask will reduce your pain time and time again.
BUILT IN POCKETS – Snuggle two reusable ice/heat packs with two extra softgel packs and hold them next to your face, right where you need them with this uniquely designed built-in pockets for additional security.
```

---

## Contributing

Contributions, suggestions, and improvements are welcome! Please open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or feedback, please contact [Your Name](mailto:your.email@example.com).

---

By following these guidelines and using the provided system prompts, you can ensure that your product titles and descriptions are optimized for both search performance and compliance with Google Shopping policies.
```
