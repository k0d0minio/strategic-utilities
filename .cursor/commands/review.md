# Code Review Command

## Overview

Comprehensive code review focusing on security, quality, and best practices.

## Steps

1. **Security Check**
   - [ ] Scan for hardcoded secrets or API keys
   - [ ] Verify input validation and sanitization
   - [ ] Check for SQL injection vulnerabilities
   - [ ] Review authentication and authorization logic

2. **Code Quality**
   - [ ] Check TypeScript types and avoid `any`
   - [ ] Verify error handling (no silent failures)
   - [ ] Review function complexity and length
   - [ ] Ensure consistent naming conventions

3. **Performance**
   - [ ] Identify potential memory leaks
   - [ ] Check for unnecessary re-renders (React)
   - [ ] Review database query efficiency
   - [ ] Verify proper cleanup in useEffect/componentWillUnmount

4. **Testing**
   - [ ] Ensure adequate test coverage
   - [ ] Verify edge cases are tested
   - [ ] Check for proper mocking of dependencies

## Checklist

- [ ] All security concerns addressed
- [ ] Code follows project conventions
- [ ] Performance optimizations applied
- [ ] Tests written and passing
- [ ] Documentation updated if needed
