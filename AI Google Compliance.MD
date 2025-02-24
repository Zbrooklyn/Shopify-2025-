Below is a sample GitHub README file that includes both a detailed background on optimizing product titles and product descriptions for Google Shopping (specifically for health & wellness products) as well as the system prompts. You can copy and paste this into your VB file or GitHub README.

```markdown
# Google Shopping Feed Optimization for Health & Wellness Products

This repository contains resources and prompts designed to help you optimize your Google Shopping product titles and descriptions for health & wellness products. Our guidelines focus on clarity, compliance, keyword optimization, and readability to ensure that your listings meet Google’s requirements and perform at their best.

---

## Background & Importance

In the competitive landscape of health and wellness e-commerce, crafting clear and compliant product data is essential. Optimized product titles and descriptions:
- **Enhance Search Visibility:** Incorporate high-impact keywords that drive more qualified traffic.
- **Inform & Engage Customers:** Provide accurate, concise, and compelling product details.
- **Ensure Compliance:** Follow advertising and regulatory guidelines (e.g., FDA, MHRA, TGA) to avoid disapprovals and legal issues.
- **Improve Conversion Rates:** Structured, readable, and relevant content helps shoppers quickly understand the benefits and features, leading to higher click-through and conversion rates.

---

## Compliance Guidelines for Health Products

When optimizing product data for health-related items, adhere to the following rules:

- **Legal & Regulatory Compliance:**
  - Ensure all claims are accurate and meet local regulatory requirements (FDA, MHRA, TGA, etc.).
  - Avoid exaggerations or unverified claims such as “miracle cure” or “guaranteed results.”

- **Privacy & Sensitive Data:**
  - Do not incorporate sensitive personal health data or use it for personalized targeting.

- **Factual & Non-Misleading:**
  - Use clear, factual language.
  - Avoid promotional text (e.g., pricing, sale dates) unless placed in designated attributes.

- **Structured & Readable Content:**
  - Organize information with bullet points, clear separators (dashes “–”, pipes “|”, commas), and proper capitalization.
  - Use digits rather than spelled-out numbers.

- **Keyword Optimization:**
  - Include relevant keywords naturally, especially those that shoppers are likely to use.
  - Prioritize important keywords within the first 70 characters.

---

## System Prompt for Optimizing Product Titles

Please optimize the following product title for Google Shopping. Your optimized title should adhere to the following guidelines:

- **Keyword-Rich & Clear:**
  - Include relevant keywords that potential shoppers would use. Focus on the product type and its primary features.

- **Length & Visibility:**
  - Use up to 150 characters, ensuring that the most important information (key keywords, product type, main benefits) appears within the first 70 characters, as this portion is most visible on many devices.

- **Structured & Readable:**
  - Organize the title logically with clear separators (such as dashes “–”, pipes “|”, or commas) to delineate attributes like product type, key features, differentiators (e.g., therapy type, support, relief), and variant details (e.g., color, size, material).

- **Factual & Compliant for Health Products:**
  - Use clear, accurate, and non-misleading language without exaggeration or unverified claims (avoid terms like “miracle” or “guaranteed cure”).
  - Avoid including promotional text (e.g., pricing, sale dates) and omit brand names if not required.
  - Ensure any health-related claims align with approved guidelines and indicate that the product provides symptom support or non-prescription relief.

- **Privacy & Local Regulatory Compliance:**
  - Do not incorporate sensitive personal health data.
  - Ensure the title complies with local regulatory requirements (such as FDA, MHRA, TGA) by accurately describing the product without implying unauthorized medical treatments.

- **Additional Best Practices:**
  - Avoid extra white spaces and excessive punctuation.
  - Use digits (e.g., "2" instead of "two") and proper capitalization (capitalize the first letter of each important word; avoid all caps that may appear spammy).
  - For products with variants, include relevant attributes to distinguish each variant.

**The final response must be returned in JSON format with the following structure:**

```json
{
  "optimized_title": "Your optimized title here",
  "explanation": "A brief explanation summarizing key changes made, including improvements in clarity, compliance, and keyword usage."
}
```

**Here is the product title to optimize:**

Migraine Relief Cap Ice Head Wrap Headache and Migraine Hat | Headache Relief with Hot/Cold Gel Head Ice Pack with Face and Eye Headache Mask Compress

---

## System Prompt for Optimizing Product Descriptions

Please optimize the following product description for Google Shopping. Your optimized description must meet these guidelines:

- **Clarity & Readability:**
  - Use clear, concise, and factual language that explains the product’s features and benefits.
  - Organize content using bullet points or short paragraphs where appropriate to enhance readability.

- **Compliance & Accuracy:**
  - Avoid exaggerated or unverified claims (e.g., ‘miracle’ or ‘guaranteed cure’).
  - Ensure that all statements are accurate and compliant with health advertising standards.

- **Structure & Detail:**
  - Clearly highlight key features and benefits (e.g., adjustable strap, reusable gel packs, built-in pockets).
  - Include specific details that help shoppers understand the product and its usage scenarios.

- **Length & Formatting:**
  - Aim for a detailed yet concise description (ideally up to 500 characters).
  - Use formatting elements (like bullet points and line breaks) to structure the information. Note: The final output should be a plain text string within JSON, and while bullet points and newline characters are preserved in the string, their visual formatting depends on the display tool.

- **Keyword Optimization:**
  - Naturally incorporate relevant keywords (e.g., 'hands-free facial compress', 'hot and cold therapy', 'TMJ pain relief', 'adjustable strap') to boost search visibility without resorting to keyword stuffing.

**Output Requirements:**
Return the optimized product description in JSON format using the structure below:

```json
{
  "optimized_description": "Your optimized product description here",
  "explanation": {
    "Clarity & Readability": "Explain how the language was simplified and structured for better readability.",
    "Compliance & Accuracy": "Detail how the description avoids exaggerated claims and complies with health advertising guidelines.",
    "Structure & Detail": "Describe the inclusion and organization of key product features and benefits.",
    "Keyword Optimization": "Explain the placement and selection of keywords to enhance search visibility."
  }
}
```

**Product Description to Optimize:**

HANDS-FREE FACIAL COMPRESS – Whether you’re in pain from a toothache or cosmetic surgery, facial pain can be unbearable. Reduce soreness and swelling directly at the source with your All Sett Health hands-free, Hot and Cold compress!  
THE PERFECT FIT – The cold and hot compress is sure to fit thanks to the adjustable strap! Shorten it to 27" for a smaller wrap or light compression, and if you need more room, loosen it to 30.” Find relief, no matter your size or shape.  
GENTLE & LIGHTWEIGHT – Don’t add more discomfort on top of your TMJ pain with an itchy or heavy ice pack! This face ice pack is gentle on your skin, thanks to its wrap microfiber material. It's so soothing and soft, you can even wear it while you nap.  
4 REUSABLE HOT/COLD GEL PACKS – Use and reuse your gel packs whenever pain strikes. Whether you have persistent TMJ or recurring migraines, your All Sett Health gel face mask will reduce your pain time and time again.  
BUILT IN POCKETS – Snuggle two reusable ice/heat packs with two extra softgel packs and hold them next to your face, right where you need them with this uniquely designed built-in pockets for additional security.

---

## Contributing

Contributions, suggestions, and improvements are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [Your Name](mailto:your.email@example.com).

---

By using these prompts and guidelines, you can ensure that your product titles and descriptions are optimized for both user engagement and compliance with Google Shopping policies.
```

Feel free to adjust the sections (like Installation, Usage, Contributing, License, and Contact) as needed for your project. This README template provides a complete overview and includes all relevant background, compliance rules, best practices, and system prompts in a structured format.
