# Vault-Tec CELEARN Cloud Security Specification (Phase 0)

## 1. Data Invariants
1. Every document under `/users/{userId}` and its subcollections (`studyProgress`, `examSessions`, `customQuestions`) MUST be owned exclusively by the authenticated, email-verified user whose `request.auth.uid == userId` and `data.ownerId == userId`.
2. PII (`email`, `displayName`, `photoURL`) resides strictly on `/users/{userId}` with owner-only `get` and `list: if false` so no other user can read or enumerate any Dweller's email or profile.
3. Subcollection documents (`studyProgress`, `examSessions`, `customQuestions`) MUST verify parent `/users/{userId}` ownership via the Master Gate `get()` on single-document operations (`get`, `create`, `update`, `delete`), while `list` operations MUST strictly validate `existing().ownerId == request.auth.uid && userId == request.auth.uid` without issuing `get()` or `exists()` calls.
4. `ownerId` and `createdAt` are immutable after document creation (`createdAt == request.time` on create; `updatedAt == request.time` on create and update).
5. Every document ID path variable MUST match `^[a-zA-Z0-9_\-]+$` (max 128 chars), and every string, list, map, and numeric field MUST enforce explicit type, enum, and size boundaries.

## 2. The "Dirty Dozen" Adversarial Payloads (Must All Return PERMISSION_DENIED)
1. **Unauthenticated Read/Write**: `get` `/users/uid_alice` with `request.auth == null`.
2. **Unverified Email Write**: `create` `/users/uid_alice` with `email_verified: false`.
3. **Cross-User PII Read**: Authenticated `uid_bob` attempts `get` `/users/uid_alice`.
4. **User Directory Enumeration**: Authenticated `uid_bob` attempts `list` `/users`.
5. **Identity Spoofing on Create**: `uid_alice` writes `/users/uid_alice` with `ownerId: "uid_bob"`.
6. **Shadow / Ghost Field Injection**: `uid_alice` writes `/users/uid_alice` adding `{ isAdmin: true, role: "overseer" }`.
7. **Immutable Field Tampering**: `uid_alice` updates `/users/uid_alice` changing `createdAt` or `ownerId`.
8. **Client Timestamp Forgery**: `uid_alice` creates `/users/uid_alice` with backdated `createdAt` instead of `request.time`.
9. **ID Poisoning Attack**: `uid_alice` writes `/users/uid_alice/examSessions/../../../evil$id` or 500-char ID.
10. **Denial-of-Wallet String / Array Bomb**: `uid_alice` writes `dwellerName` of 5000 chars or `bookmarks` list of 10000 items.
11. **Value Poisoning Type Attack**: `uid_alice` updates `bottleCaps` to `-999` or `"infinite"` or `themeMode` to `"invalid-theme"`.
12. **Orphaned Subcollection Write**: `uid_alice` creates `/users/uid_alice/studyProgress/main` before `/users/uid_alice` exists (fails Master Gate `exists`/`get`).
