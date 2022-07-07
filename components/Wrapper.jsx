function Wrapper({children}) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center py-5 bg-slate-200">
      <div className="min-h-full max-w-screen-2xl border border-black">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
