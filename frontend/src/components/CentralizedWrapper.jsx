function CentralizedWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      {children}
    </div>
  );
}

export default CentralizedWrapper;
