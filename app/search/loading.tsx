export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-surface-300 border-t-brand-500 rounded-full animate-spin" />
        <p className="text-surface-600">Loading...</p>
      </div>
    </div>
  );
}
