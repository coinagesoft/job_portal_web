const SettingsPageShell = ({ title, description, children }) => {
  return (
    <main className="main">
      <section className="section-box mt-50 mb-50">
        <div className="container">
          <div className="candidate-inner-panel">
            <h3 className="mt-0 color-brand-1 mb-15">{title}</h3>
            <p className="font-md color-text-paragraph-2 mb-30">{description}</p>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SettingsPageShell;
