# Bug Fix Command

## Overview

Systematic bug fixing with mandatory research phase before any code changes.

## CRITICAL: Research-First Approach

**NO CODE CHANGES ALLOWED** until complete analysis is reported back to user.

## Phase 1: Comprehensive Research (MANDATORY)

1. **Codebase Scan**
   - [ ] Scan entire related codebase for context
   - [ ] Check all potentially affected files
   - [ ] Look for similar patterns with same issue
   - [ ] Document what files were checked and why
   - [ ] Map all dependencies and relationships

2. **Root Cause Analysis**
   - [ ] Understand the actual problem (not just symptoms)
   - [ ] Trace error back to source
   - [ ] Identify all contributing factors
   - [ ] Analyze error patterns and frequency
   - [ ] Check for related issues in other parts of codebase

3. **Impact Assessment**
   - [ ] Identify all files/components that could be affected
   - [ ] Check for similar patterns that might have same issue
   - [ ] Analyze potential side effects of any fix
   - [ ] Review test coverage for affected areas

## Phase 2: Analysis Report (REQUIRED)

**STOP HERE** and report back to user with:

- [ ] **Root Cause**: Clear explanation of what's actually wrong
- [ ] **Affected Files**: Complete list of files involved
- [ ] **Proposed Fix**: Detailed plan for elegant solution
- [ ] **Risk Assessment**: Potential side effects and mitigation
- [ ] **Testing Strategy**: How to verify the fix works
- [ ] **Alternative Approaches**: Other solutions considered and why rejected

**WAIT FOR USER APPROVAL** before proceeding to implementation.

## Phase 3: Implementation (After Approval)

4. **Minimal Fix Implementation**
   - [ ] Apply smallest possible change
   - [ ] Focus only on the specific issue
   - [ ] Avoid refactoring unrelated code
   - [ ] Follow approved plan exactly

5. **Verification**
   - [ ] Run existing tests to ensure no regressions
   - [ ] Test the specific bug scenario
   - [ ] Verify similar patterns still work
   - [ ] Document the fix and reasoning

## Checklist

- [ ] Entire codebase scanned and understood
- [ ] Root cause identified (not just symptoms)
- [ ] Complete analysis report provided to user
- [ ] User approval received for proposed fix
- [ ] Minimal fix applied per approved plan
- [ ] All tests still pass
- [ ] Bug scenario verified fixed
- [ ] No unintended side effects
