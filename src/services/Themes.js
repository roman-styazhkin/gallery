class Themes {
  themes = {
    light: {
      "--bg-theme": "#fff",
      "--hover": "#ededed",
      "--text-color": "#000",
    },

    dark: {
      "--bg-theme": "#000",
      "--text-color": "#fff",
      "--hover": "#3b3b3b",
    },
  };

  onToggleTheme = (theme, callback) => {
    Object.entries(this.themes[theme]).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });

    callback(theme === "dark" ? "light" : "dark");
  };
}

export default Themes;
