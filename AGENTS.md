```markdown
# AGENTS.md - Guidelines for AI Coding Agents

These guidelines are designed to ensure the development of high-quality, maintainable, and reliable AI coding agents within this repository. Adherence to these principles is crucial for collaboration and long-term success.

## 1. DRY (Don't Repeat Yourself)

*   All code snippets, functions, and classes should have a single, well-defined purpose.
*   If a function or class performs a similar task, it should be encapsulated within a reusable component.
*   Avoid duplicating logic.  Refactor existing code to eliminate redundancies.

## 2. KISS (Keep It Simple, Stupid)

*   Code should be as concise and readable as possible while still achieving its intended functionality.
*   Prioritize clarity over cleverness.
*   Avoid unnecessary complexity.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one well-defined responsibility.
*   **Open/Closed Principle:**  The system should be extensible through mechanisms like interfaces or abstract classes, without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses must be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to implement interfaces they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the necessary functionality for the immediate task.
*   Avoid adding features or code that is not currently required.
*   Refactor only when the underlying problem has been solved.

## 5. Testability & Mocking

*   All tests must be implemented as unit tests, covering all critical logic.
*   Use mocks and stubs to isolate components and control dependencies during testing.
*   Test coverage should be at least 80%.
*   Mocking is reserved solely for test-driven development.
*   Do not use mocks for production code.

## 6. Code Length & Structure

*   Each file should be no more than 180 lines of code.
*   Code should be well-formatted, using consistent indentation and spacing.
*   Comments should explain the *why* rather than the *what* (the code should speak for itself).
*   Use meaningful variable and function names.

## 7. Project Structure & Conventions

*   A dedicated `src/` directory should be used for source code.
*   A separate `tests/` directory should contain all tests.
*   Use a consistent naming convention for modules, classes, and functions.
*   Consider a `docs/` directory for API documentation and explanations.

## 8.  General Considerations

*   Prioritize documentation – make the code self-documenting whenever possible.
*   Utilize clear and concise error handling.
*   Perform code reviews before merging changes.
*   Regularly refactor to improve code quality.

## 9. File Limits

*   Each file shall be no more than 180 lines of code.

## 10.  Mandatory Elements

*   A README file explaining the purpose and usage of each file should be included.
*   A brief description of the intended functionality of each component should be provided in the README.

---

**Note:** This document is intended to provide a framework for development and should be continuously reviewed and updated as the project evolves.  This is a baseline, and the specific implementation and refinement of these guidelines will be handled through dedicated documentation and code reviews.
```