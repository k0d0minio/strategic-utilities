# Plan Command

## Overview

Take a Linear ticket from the "Ready for Dev" column (or by specific ID) and create a comprehensive implementation plan with detailed analysis of every code change required. Includes mandatory approval process before implementation.

## Usage

- Process next ticket from Ready for Dev: `/plan`
- Process specific ticket: `/plan LINEAR-123`

## Branch Naming

Branches are created using the pattern: `{label}/{ticket-id}-{title-slug}`

- **Label**: Primary ticket label (feature, bug, hotfix, etc.)
- **Ticket ID**: Linear ticket identifier (e.g., 123, 345)
- **Title Slug**: Simplified version of ticket title (lowercase, hyphens)

Examples:

- `feature/123-authentication-system`
- `bug/345-login-error`
- `hotfix/456-security-patch`
- `enhancement/789-user-dashboard`

## Steps

1. **Fetch Ticket Details & Setup Branch**
   - [ ] Connect to Linear workspace
   - [ ] Retrieve ticket from "Ready for Dev" column (or specified ID)
   - [ ] Extract title, description, acceptance criteria, labels, and priority
   - [ ] Verify ticket is properly scoped and ready for development
   - [ ] Create new git branch: `git checkout -b {label}/{ticket-id}-{title-slug}`
   - [ ] Verify branch creation and current status

2. **Comprehensive Codebase Analysis**
   - [ ] Read ALL related files before planning (no assumptions)
   - [ ] Identify dependencies, imports, and data flow
   - [ ] Analyze potential conflicts with existing functionality
   - [ ] Map ticket requirements to specific codebase areas
   - [ ] Research related patterns and conventions in codebase
   - [ ] Identify testing requirements and existing test coverage
   - [ ] Analyze security implications and performance considerations

3. **Create Detailed Implementation Plan**
   - [ ] **Current State Analysis**: Document existing codebase state
   - [ ] **Requirements Breakdown**: Detailed analysis of ticket requirements
   - [ ] **Technical Approach**: Architecture decisions and rationale
   - [ ] **Files to Change**: Complete list with specific change descriptions
   - [ ] **Implementation Steps**: Granular, sequential checklist
   - [ ] **Testing Strategy**: Unit tests, integration tests, manual testing
   - [ ] **Risk Assessment**: Potential issues and mitigation strategies
   - [ ] **Dependencies**: External libraries, API changes, or other tickets

4. **Mandatory Approval Process**
   - [ ] Present complete plan for review
   - [ ] Explain every code change and its purpose
   - [ ] Highlight any assumptions or unknowns
   - [ ] Get explicit approval for approach and scope
   - [ ] Confirm understanding of all requirements
   - [ ] **STOP**: Do not proceed until approval is given

## Implementation Plan Template

The plan must include:

### Current State Analysis

- Existing code structure and patterns
- Current functionality and behavior
- Related components and dependencies
- Database schema and data models
- API endpoints and services

### Requirements Breakdown

- Detailed analysis of each acceptance criteria
- Edge cases and error scenarios
- User experience considerations
- Performance requirements
- Security requirements

### Technical Approach

- Architecture decisions and rationale
- Design patterns to follow
- Performance and security considerations
- Database changes required
- API changes required

### Files to Change

- Complete list with specific change descriptions
- New files to create with purpose
- Existing files to modify with specific changes
- Files to delete or refactor
- Configuration changes needed

### Implementation Steps

- Granular, sequential checklist
- Each step should be atomic and testable
- Clear dependencies between steps
- Rollback points identified
- Testing checkpoints included

### Testing Strategy

- Unit tests for new functionality
- Integration tests for component interactions
- Manual testing scenarios
- Regression testing considerations
- Performance testing requirements

### Risk Assessment

- Potential breaking changes
- Performance implications
- Security considerations
- Rollback strategy
- Mitigation plans for identified risks

## Codebase Analysis Requirements

Before creating the implementation plan, must analyze:

- **Related Components**: All components that interact with the feature
- **Data Flow**: How data moves through the system
- **API Dependencies**: External services and internal APIs
- **Database Schema**: Tables, relationships, and constraints
- **Authentication/Authorization**: Security implications
- **Testing Infrastructure**: Existing test patterns and coverage
- **Deployment Considerations**: Environment-specific requirements

## Approval Process Details

The approval process must include:

- **Complete Plan Review**: Every file change explained
- **Technical Rationale**: Why each approach was chosen
- **Risk Disclosure**: All potential issues identified
- **Testing Coverage**: Comprehensive testing strategy
- **Rollback Plan**: How to undo changes if needed
- **Timeline Estimate**: Realistic implementation timeline

## Implementation Plan Structure

```
# Implementation Plan: [Ticket Title]

## Current State Analysis
[Detailed analysis of existing codebase]

## Requirements Breakdown
[Analysis of each acceptance criteria]

## Technical Approach
[Architecture and design decisions]

## Files to Change
### New Files
- `path/to/new-file.ts` - [Purpose and content description]

### Modified Files
- `path/to/existing-file.ts` - [Specific changes needed]

### Deleted Files
- `path/to/obsolete-file.ts` - [Reason for deletion]

## Implementation Steps
1. [Atomic step with clear outcome]
2. [Next atomic step]
...

## Testing Strategy
[Comprehensive testing approach]

## Risk Assessment
[Potential issues and mitigation]

## Dependencies
[External requirements and blockers]
```

## Quality Gates

Before presenting plan for approval:

- [ ] All related files analyzed
- [ ] Dependencies mapped
- [ ] Testing strategy defined
- [ ] Risks identified
- [ ] Rollback plan created
- [ ] Implementation steps are atomic
- [ ] No assumptions made about codebase

## Checklist

- [ ] Ticket retrieved from "Ready for Dev" column
- [ ] Git branch created: `{label}/{ticket-id}-{title-slug}`
- [ ] Comprehensive codebase analysis completed
- [ ] All related files read and understood
- [ ] Dependencies and conflicts identified
- [ ] Detailed implementation plan created
- [ ] Plan presented for review
- [ ] **EXPLICIT APPROVAL RECEIVED**
- [ ] Ready to implement incrementally
