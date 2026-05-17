# Security Specification - CryptoPrime

## 1. Data Invariants
- A user document can ONLY be created by the authenticated user with the matching UID.
- User email must match the auth token email.
- Managers are read-only for public users.
- Role 'admin' cannot be self-assigned.

## 2. The "Dirty Dozen" Payloads (Deny Cases)
1. Creating a user with a different UID.
2. Updating a user's email to one not matching auth.
3. Updating a user's role to 'admin' as a regular user.
4. Writing to the 'managers' collection as a non-admin.
5. Reading the 'users' collection as a non-owner.
6. Creating a manager with missing required fields.
7. Injecting 1MB string into 'displayName'.
8. Updating a user's 'createdAt' field (immutable).
9. Creating a user without email verification (if mandated).
10. Listing the 'users' collection without owner filter.
11. Deleting a manager as a non-admin.
12. Attempting to bypass 'isValidId' with a malicious path.

## 3. Deployment Plan
- Setup `firestore.rules`.
- Implement registration flow in App.
