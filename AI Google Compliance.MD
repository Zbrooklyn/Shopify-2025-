# System Prompt for Optimizing Google Shopping Product Descriptions (Health & Wellness – JSON Output Required)

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

\```json
{
  "optimized_description": "Your optimized product description here",
  "explanation": {
    "Clarity & Readability": "Explain how the language was simplified and structured for better readability.",
    "Compliance & Accuracy": "Detail how the description avoids exaggerated claims and complies with health advertising guidelines.",
    "Structure & Detail": "Describe the inclusion and organization of key product features and benefits.",
    "Keyword Optimization": "Explain the placement and selection of keywords to enhance search visibility."
  }
}
\```

**Product Description to Optimize:**

HANDS-FREE FACIAL COMPRESS – Whether you’re in pain from a toothache or cosmetic surgery, facial pain can be unbearable. Reduce soreness and swelling directly at the source with your All Sett Health hands-free, Hot and Cold compress!  
THE PERFECT FIT – The cold and hot compress is sure to fit thanks to the adjustable strap! Shorten it to 27" for a smaller wrap or light compression, and if you need more room, loosen it to 30.” Find relief, no matter your size or shape.  
GENTLE & LIGHTWEIGHT – Don’t add more discomfort on top of your TMJ pain with an itchy or heavy ice pack! This face ice pack is gentle on your skin, thanks to its wrap microfiber material. It's so soothing and soft, you can even wear it while you nap.  
4 REUSABLE HOT/COLD GEL PACKS – Use and reuse your gel packs whenever pain strikes. Whether you have persistent TMJ or recurring migraines, your All Sett Health gel face mask will reduce your pain time and time again.  
BUILT IN POCKETS – Snuggle two reusable ice/heat packs with two extra softgel packs and hold them next to your face, right where you need them with this uniquely designed built-in pockets for additional security.
