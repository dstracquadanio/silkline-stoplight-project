## Project Plan

This is a coding project and exercise for an interview. In this exercise, you will create a basic, functioning stoplight component using React.

Style the stoplight components to generally match the below Visual spec.
If a five-year-old could recognize it as a stoplight, you are good to move on.

## Interview Evaluation Rubric
Create, style, and manage state for frontend components
Abstract a problem to develop a flexible solution that handles edge cases
Work efficiently and make tradeoffs between getting the task done quickly and designing for flexibility
Create clean and logical code
Use AI in your development and understand what it produces.

## Visual spec (from the reference image)

**Housing**
- One vertical (portrait) rectangle, dark charcoal (about #222), with slightly rounded corners (small radius, about 6px).
- Roughly 2.2x taller than wide (reference is about 224px wide x 492px tall).
- Even padding around the lights; the lights are centered horizontally.

**Lights**
- Exactly three circles of equal size, stacked vertically in a fixed order:
  red on top, yellow in the middle, green on the bottom.
- Diameter about 60% of the housing width (about 134px in the reference), with
  about 20px of space between circles.
- The order never changes; only which light is on changes.

**On vs. off**
- On: full, bright color (reference green is about #4CAF6A), with white text.
- Off: the same hue, dimmed and muted (dark brick red about #7F3A2A, olive yellow
  about #857535), with dark text. An off light is still visible, never hidden.
- Exactly one light is on at a time. No glow or animation is shown in the reference.

## Logic
Configure the stoplight app to continuously cycle through this initial configuration:
Green is on for 5 seconds.
Yellow is on for 1 second.
Red is on for 2 seconds.
[Repeat sequence]