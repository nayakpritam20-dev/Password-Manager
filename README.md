# 🔐 Password Generator

A lightweight, client-side password generator built with vanilla **HTML, CSS, and JavaScript**. Generate strong, customizable passwords directly in your browser — no backend, no data storage, no tracking.

**🌐 Live Demo:** [password-manager-lyart-xi.vercel.app](https://password-manager-lyart-xi.vercel.app)

> **Note:** Despite the repository name, this is a **password generator**, not a password vault/manager — it creates random passwords but does not store or manage saved credentials.

## Features

- Generate random passwords with a custom length (4–30 characters)
- Toggle character types on/off:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Special characters (symbols)
- One-click copy to clipboard
- Simple, responsive, single-page UI
- 100% client-side — runs entirely in the browser with no server or external dependencies

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| Hosting | [Vercel](https://vercel.com) |

## Project Structure

```
Password-Manager/
├── index.html      # App markup and UI controls
├── style.css       # Styling for the generator interface
└── script.js       # Password generation and clipboard logic
```

## Getting Started

No build tools, package managers, or installation required.

### Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/nayakpritam20-dev/Password-Manager.git
   cd Password-Manager
   ```
2. Open `index.html` directly in your browser
   ```bash
   open index.html      # macOS
   start index.html     # Windows
   xdg-open index.html  # Linux
   ```

That's it — no server setup needed. (Optionally, you can serve it locally with any static server, e.g. `npx serve` or the VS Code "Live Server" extension.)

## Usage

1. Set your desired **password length** using the number input (min 4, max 30).
2. Check or uncheck the character types you want included (uppercase, lowercase, numbers, special characters).
3. Click **Generate Password** to create a new password.
4. Click **Copy Password** to copy it to your clipboard.

## Roadmap / Ideas for Contributors

- [ ] Password strength indicator
- [ ] "Avoid ambiguous characters" option (e.g., excluding `0`, `O`, `l`, `1`)
- [ ] Save/copy confirmation toast instead of silent copy
- [ ] Dark mode toggle
- [ ] Local history of recently generated passwords (session-only, not persisted)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

No license has been specified for this repository. If you intend for others to use, modify, or distribute this project, consider adding a [LICENSE](https://choosealicense.com/) file (e.g., MIT).

## Author

**Pritam Nayak** — [@nayakpritam20-dev](https://github.com/nayakpritam20-dev)
