// Static teal/cyan mesh for the hero background. This keeps the same visual
// direction without large blurred animated layers, which are costly in Brave.
export function GradientMesh() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 8%, rgb(var(--c-accent) / 0.32), transparent 30%), radial-gradient(circle at 82% 18%, rgb(var(--c-accent-2) / 0.26), transparent 28%), radial-gradient(circle at 48% 92%, rgb(var(--c-accent) / 0.18), transparent 34%)',
        }}
      />
    </div>
  );
}
