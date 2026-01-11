# SECTION REDESIGN SPEC
## How Systems Take Shape

> This document defines how the **“How I Approach Product & System Design”** section must be redesigned.
> The goal is to visually represent a **decision-driven system design mindset**, not a generic architecture diagram.
> Style should remain premium, dark, minimal, and diagram-led — but the mental model must change.

---

## 1. Section Intent (Non-Negotiable)

This section must communicate:

- I do **not** start with technology
- I start with **constraints, risks, and human realities**
- Architecture is an **outcome**, not a template
- Systems evolve through **decisions and trade-offs**

If the diagram looks like a reference architecture, the section has failed.

---

## 2. Section Title & Subtitle (Final)

### Title (exact)
**How Systems Take Shape**

### Subtitle (exact, may wrap to 2 lines)
I start with business intent and operational reality, then let architecture emerge through constraints and trade-offs.

---

## 3. Overall Layout Requirements

- Full-width section
- Dark background consistent with rest of site
- Diagram is the **primary visual**, not supporting content
- Text exists only to frame thinking, not explain components
- Vertical height: ~120–140vh (intentionally tall)

Scrolling through this section should feel **slow and deliberate**.

---

## 4. Diagram Redesign — Conceptual Model

### ❌ What We Are Removing
- Linear flow (Client → API → Services)
- Technology-first labels
- Equal-weight boxes
- “Standard architecture” feel

---

### ✅ New Diagram Mental Model

The diagram must be structured as **three layers**:

---

### Layer 1 — Design Inputs (Top Layer)

These represent forces acting on the system — **not components**.

**Visual Requirements**
- 3 nodes
- Slight horizontal offset (not perfectly aligned)
- No arrows between them
- Soft glow, equal visual weight

**Node Labels (exact)**
- Business Goals
- Operational Reality
- Human Constraints

These should feel like pressures, not steps.

---

### Layer 2 — Design Decisions (Middle Layer)

This is the **thinking layer**.
It must feel lighter, more abstract, and more dynamic.

**Visual Requirements**
- Smaller nodes than Layer 1
- Connected *from multiple inputs*
- Positioned slightly off-center
- Appear only after inputs (animation-wise)

**Node Labels (exact, choose 2–3)**
- What must be real-time?
- What can fail safely?
- Where is human intervention unavoidable?

This layer communicates *how decisions are formed*.

---

### Layer 3 — Emergent System Shape (Bottom Layer)

Only here do we show system elements.

**Visual Requirements**
- Same visual style as current boxes (you may reuse components)
- Slightly faded compared to upper layers
- No left-to-right flow
- Connected upward, not horizontally

**Node Labels (exact)**
- Event Streams
- Control APIs
- Operational Interfaces

These are outcomes — not starting points.

---

## 5. Motion & Reveal Rules

Animation is **semantic**, not decorative.

### Required Sequence
1. Input nodes fade in slowly
2. Decision nodes appear one-by-one
3. System shape nodes appear last, subtly

### Forbidden
- Continuous motion
- Pulsing arrows
- Attention-grabbing effects

Motion should reinforce:
**Thinking → Decisions → Architecture**

---

## 6. Supporting Text (Below Diagram)

### Intro Paragraph (exact positioning)
Placed **below** the diagram, centered, narrow width.

**Intent**
Explain *why* this approach exists, not *how* it works.

---

### Principle Blocks (Keep, But Reframe)

You may keep **3 principles**, but they must be framed as outcomes of thinking, not rules.

**Final Headings (exact)**
- Explicit Workflows
- Isolated Rules
- Visible Failures

**Layout Rules**
- No cards
- Minimal separators
- Horizontal layout on desktop, stacked on mobile
- These should feel like footnotes to the diagram

---

## 7. Visual Tone Checklist

This section should feel:
- Calm
- Confident
- Thoughtful
- Slightly uncomfortable (in a good way)

It should NOT feel:
- Salesy
- Educational
- Framework-driven
- Template-based

---

## 8. Success Test (Important)

A senior engineer or architect should think:

> “This person doesn’t start with tools.  
> They start with reality.”

If that reaction does not happen, redesign again.

---

## 9. Engineer Notes

- Do not name specific technologies (Kafka, Redis, etc.)
- Do not optimize for mobile first — preserve meaning first
- Clarity > cleverness
- This section is about **how decisions are made**, not what was built

---

END OF SPEC
