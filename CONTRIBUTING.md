# Contributing to My Portfolio Builder

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/my-portfolio-builder.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`

## Development Workflow

### Before You Start

- Ensure you're on the latest main branch: `git pull origin main`
- Install and configure your IDE for ESLint and Prettier

### Making Changes

1. Write your code following the existing code style
2. Add tests for new features: `npm run test:watch`
3. Run linting: `npm run lint`
4. Test locally: `npm run dev`

### Code Style

- Use TypeScript for all new code
- Follow the existing naming conventions
- Write descriptive commit messages
- Use meaningful component and function names
- Add JSDoc comments for complex functions

### Commits

Follow conventional commit format:

```
feat: Add new feature description
fix: Fix bug description
docs: Update documentation
style: Format code
test: Add test cases
```

Example:
```bash
git commit -m "feat: Add dark mode toggle component"
```

## Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass: `npm test`
3. Run lint check: `npm run lint`
4. Push to your fork
5. Open a Pull Request with a clear description of changes
6. Link any related issues in the PR description

## Pull Request Checklist

- [ ] Code follows the style guidelines
- [ ] Tests pass locally (`npm test`)
- [ ] Lint passes locally (`npm run lint`)
- [ ] Documentation is updated
- [ ] Commit messages are descriptive
- [ ] No unnecessary console logs

## Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos (if applicable)
- Your environment (Node version, OS, browser)

## Questions?

Feel free to open an issue for any questions or create a discussion thread.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
