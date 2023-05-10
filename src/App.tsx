import KitchenSink from "./KitchenSink.mdx";

export const App = () => (
  <div className="flex min-h-screen flex-col">
    <header className="container sticky top-0 z-40 mx-auto bg-gray-100">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          @singlestone/sugar kitchen sink
        </h1>
      </div>
    </header>
    <main className="flex flex-1 flex-col">
      <div className="container mx-auto py-6 flex-1">
        <KitchenSink />
      </div>
    </main>
  </div>
);
