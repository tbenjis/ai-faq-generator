# Contributing to AI FAQ Generator

First off, thank you for considering contributing to AI FAQ Generator! It's people like you that make it such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead
- Explain why this enhancement would be useful

### Pull Requests

- Fork the repo and create your branch from `main`
- If you've added code that should be tested, add tests
- If you've changed APIs, update the documentation
- Ensure the test suite passes
- Make sure your code lints
- Issue that pull request!

## Development Process

1. Fork the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-branch-name`
5. Submit a pull request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/ai-faq-generator.git

# Navigate to the project directory
cd ai-faq-generator

# Install dependencies
npm install

# Create .env.local file and add your environment variables
cp .env.example .env.local

# Run tests
npm test

# Start development server
npm run dev
```

### Testing

We use Jest and React Testing Library for testing. Please add tests for any new features or bug fixes.

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Style Guide

- Use TypeScript
- Follow the existing code style
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await instead of promises
- Use proper TypeScript types instead of `any`

## Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
